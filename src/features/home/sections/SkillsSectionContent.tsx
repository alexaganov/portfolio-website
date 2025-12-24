import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';

import { resume, type ResumeDataTechnology } from '@/data';
import { cn } from '@/utils/class-name';

import { type SkillListItem, SkillsList } from './SkillsList';

gsap.registerPlugin(Flip);

const SKILLS_TAG_FILTER_ALL_ID = 'all';

const getSkillsTagFilters = (skills: ResumeDataTechnology[]): { id: string; total: number }[] => {
  const uniqueSkillTags = skills.reduce((acc, skill) => {
    skill.tags.forEach((tag) => {
      acc.set(tag, (acc.get(tag) ?? 0) + 1);
    });

    return acc;
  }, new Map<string, number>());

  const skillsTagFilters = [
    {
      id: SKILLS_TAG_FILTER_ALL_ID,
      total: skills.length,
    },
    ...Array.from(uniqueSkillTags, ([id, total]) => {
      return {
        id,
        total,
      };
    }),
  ];

  skillsTagFilters.sort((a, b) => b.total - a.total);

  return skillsTagFilters;
};

const transformTechnologiesToSkillList = (
  data: ResumeDataTechnology[],
  highlightedTagsIds: string[],
): SkillListItem[] => {
  return data.map((skill, i) => {
    const isHighlighted = !highlightedTagsIds.length
      ? true
      : skill.tags.some((tag) => highlightedTagsIds.includes(tag));

    return {
      id: skill.id,
      position: i + 1,
      name: skill.name,
      isHighlighted,
      tags: skill.tags,
    };
  });
};

// sorts by last added tag
const sortSkillListByHighlighted = (skillList: SkillListItem[], highlightedTagsIds: string[]) => {
  return skillList.sort((a, b) => {
    const aLastTagIndex = highlightedTagsIds.findLastIndex((tagId) => {
      return a.tags.includes(tagId);
    });
    const bLastTagIndex = highlightedTagsIds.findLastIndex((tagId) => {
      return b.tags.includes(tagId);
    });

    return bLastTagIndex - aLastTagIndex;

    // if (!a.isHighlighted && b.isHighlighted) {
    //   return 1;
    // } else if (a.isHighlighted && !b.isHighlighted) {
    //   return -1;
    // }

    // return 0;
  });
};

const scrollToElementCenter = (scrollContainer: HTMLElement, target: HTMLElement) => {
  const targetCenter = target.offsetLeft + target.offsetWidth / 2;
  const containerCenter = scrollContainer.clientWidth / 2;
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  const nextScrollLeft = Math.min(maxScrollLeft, Math.max(0, targetCenter - containerCenter));

  scrollContainer.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
};

export const SkillsSectionContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSkillTagFilterIds, setActiveSkillTagFilterIds] = useState<string[]>([]);

  const flipStateRef = useRef<Flip.FlipState | null>(null);

  const skillsTagFilters = useMemo(() => getSkillsTagFilters(resume.technologies), []);
  const skillListItems = useMemo(
    () => transformTechnologiesToSkillList(resume.technologies, activeSkillTagFilterIds),
    [activeSkillTagFilterIds],
  );

  const sortedSkillItems = useMemo(
    () => sortSkillListByHighlighted(skillListItems, activeSkillTagFilterIds),
    [skillListItems, activeSkillTagFilterIds],
  );

  const isSkillTagFilterActive = (skillsTagFilterId: string) => {
    return (
      (skillsTagFilterId === SKILLS_TAG_FILTER_ALL_ID && !activeSkillTagFilterIds.length) ||
      activeSkillTagFilterIds.includes(skillsTagFilterId)
    );
  };

  useLayoutEffect(() => {
    if (!flipStateRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      Flip.from(flipStateRef.current!, {
        duration: 0.5,
        ease: 'expo.out',
      });

      flipStateRef.current = null;
    }, containerRef);

    return () => ctx.revert();
  }, [sortedSkillItems]);

  return (
    <div ref={containerRef} className="flex flex-col">
      <div className="flex sticky top-0 z-1 bg-bg-secondary/50 -mx-5 px-5 rounded-b-xl lg:-mx-10 lg:px-10 backdrop-blur-md flex-col -mt-2.5 py-3.5 ">
        <span className={cn('text-xs text-text-tertiary self-start font-mono mb-2')}>Sort By:</span>

        {/* container prevents content from expanding based on scroll content */}
        <div className="flex">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto w-0 grow shrink relative border flex scrollbar-hidden h-pressable-md p-1 border-border-primary rounded-lg"
          >
            {/* min-w-max workaround to make right padding work */}
            <ul className={cn('flex min-w-max gap-1 text-xs font-mono')}>
              {skillsTagFilters.map((skillsTagFilter) => {
                const isActive = isSkillTagFilterActive(skillsTagFilter.id);

                return (
                  <li className="flex shrink-0" key={skillsTagFilter.id}>
                    <button
                      className={cn('h-full px-2 rounded-md cursor-pointer transition-all', {
                        'text-text-primary bg-bg-tertiary': isActive,
                        'text-text-tertiary': !isActive,
                      })}
                      onClick={(event) => {
                        flipStateRef.current = Flip.getState('[data-gsap-target="skill-item"]', {
                          props: 'transform',
                          simple: true,
                        });

                        document.querySelector('#skills')?.scrollIntoView({
                          behavior: 'smooth',
                        });

                        const scrollContainer = scrollContainerRef.current;

                        if (scrollContainer) {
                          scrollToElementCenter(scrollContainer, event.currentTarget);
                        }

                        setActiveSkillTagFilterIds(
                          skillsTagFilter.id === SKILLS_TAG_FILTER_ALL_ID
                            ? []
                            : [skillsTagFilter.id],
                        );
                      }}
                    >
                      <span className="w-full -h">
                        {skillsTagFilter.id} ({skillsTagFilter.total})
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <SkillsList ref={listRef} data={sortedSkillItems} />
    </div>
  );
};
