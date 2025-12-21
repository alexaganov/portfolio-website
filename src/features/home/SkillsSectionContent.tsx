import { resume, ResumeDataTechnology } from "@/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import clsx from "clsx";
import React, { useMemo, useRef, useState } from "react";
import { SkillListItem, SkillsList } from "./SkillsList";

const SKILLS_TAG_FILTER_ALL_ID = "all";

const getSkillsTagFilters = (
  skills: ResumeDataTechnology[]
): { id: string; total: number }[] => {
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
  highlightedTagsIds: string[]
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

// const filterSkillList = (
//   skillList: SkillListItem[],
//   activeTagsIds: string[]
// ) => {
//   if (!activeTagsIds.length) {
//     return skillList;
//   }

//   return skillList.filter((skill) => {
//     return skill.tags.some((tag) => activeTagsIds.includes(tag));
//   });
// };

// sorts by last added tag
const sortSkillListByHighlighted = (
  skillList: SkillListItem[],
  highlightedTagsIds: string[]
) => {
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

const SkillsSectionContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [activeSkillTagFilterIds, setActiveSkillTagFilterIds] = useState<
    string[]
  >([]);
  const [isVisuallySortAvailable, setIsVisuallySortAvailable] = useState(false);

  const skillsTagFilters = useMemo(
    () => getSkillsTagFilters(resume.technologies),
    []
  );
  const skillListItems = useMemo(
    () =>
      transformTechnologiesToSkillList(
        resume.technologies,
        activeSkillTagFilterIds
      ),
    [activeSkillTagFilterIds]
  );

  const sortedSkillItems = useMemo(
    () => sortSkillListByHighlighted(skillListItems, activeSkillTagFilterIds),
    [skillListItems, activeSkillTagFilterIds]
  );

  const visibleSkillItemsRef = useRef<SkillListItem[]>(sortedSkillItems);

  // work around to show updated items only when list is not visible for user
  if (isVisuallySortAvailable) {
    visibleSkillItemsRef.current = sortedSkillItems;
  }

  const visibleSkillItems = visibleSkillItemsRef.current;

  const { contextSafe } = useGSAP({ scope: containerRef });

  const getSkillTagFilterClickHandler = (skillTagFilterId: string) => {
    if (
      skillTagFilterId === SKILLS_TAG_FILTER_ALL_ID &&
      !activeSkillTagFilterIds.length
    ) {
      return () => {};
    }

    return contextSafe(() => {
      const tl = gsap.timeline();

      setIsVisuallySortAvailable(false);

      setActiveSkillTagFilterIds((oldFilter) => {
        if (skillTagFilterId === SKILLS_TAG_FILTER_ALL_ID) {
          return [];
        }

        if (oldFilter.includes(skillTagFilterId)) {
          return oldFilter.filter(
            (oldFilterTechTag) => oldFilterTechTag !== skillTagFilterId
          );
        }

        return [...oldFilter, skillTagFilterId];
      });

      tl.to(listRef.current, {
        opacity: 0,
        y: "1rem",
        duration: 0.3,
        ease: "power1.in",
      });

      tl.call(() => {
        setIsVisuallySortAvailable(true);
      });

      tl.to(listRef.current, {
        opacity: 1,
        y: "0",
        duration: 0.3,
        ease: "power1.out",
      });
    });
  };

  const isSkillTagFilterActive = (skillsTagFilterId: string) => {
    return (
      (skillsTagFilterId === SKILLS_TAG_FILTER_ALL_ID &&
        !activeSkillTagFilterIds.length) ||
      activeSkillTagFilterIds.includes(skillsTagFilterId)
    );
  };

  return (
    <div ref={containerRef} className="flex relative flex-col">
      <div className="flex flex-col gap-2 mb-4 relative">
        <span className="text-xs text-text-tertiary font-mono">Sort By:</span>
        <ul className="flex overflow-hidden gap-2 rounded-lg flex-wrap text-xs font-mono border-border-primary">
          {skillsTagFilters.map((skillsTagFilter) => {
            const isActive = isSkillTagFilterActive(skillsTagFilter.id);

            return (
              <li className="flex flex-shrink-0" key={skillsTagFilter.id}>
                <button
                  className={clsx("btn btn-pill btn-sm", {
                    "btn-solid-primary": isActive,
                    "btn-outline-muted": !isActive,
                  })}
                  onClick={getSkillTagFilterClickHandler(skillsTagFilter.id)}
                >
                  {skillsTagFilter.id} ({skillsTagFilter.total})
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <SkillsList ref={listRef} data={visibleSkillItems} />
    </div>
  );
};

export default SkillsSectionContent;
