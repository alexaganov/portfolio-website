'use client';
import clsx from 'clsx';
import React, { type ComponentPropsWithRef, useEffect, useRef } from 'react';

import { cn } from '@/utils/class-name';
import { isFullyInView } from '@/utils/dom';

import { useSectionNav } from './sections/section-nav-provider';

type HomePageSectionsProps = ComponentPropsWithRef<'div'> & {
  sectionClassName?: string;
};

export const HomePageSections = ({ sectionClassName, ...props }: HomePageSectionsProps) => {
  const { setActiveId, sections } = useSectionNav();
  const contentElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElements = Array.from(contentElRef.current?.querySelectorAll('section') || []);

    const handleIntersectionObserver: IntersectionObserverCallback = () => {
      const activeSection = sectionElements.find((section) => {
        if (isFullyInView(section)) {
          return true;
        }

        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visibleHeight = Math.max(
          0,
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0),
        );
        const visibleHeightPercentage = visibleHeight / viewportHeight;

        // check if 50% of section is visible
        return visibleHeightPercentage >= 0.5;
      });

      setActiveId(activeSection?.id);
    };

    const observer = new IntersectionObserver(handleIntersectionObserver, {
      threshold: [0, 1],
      rootMargin: '0px 0px -50% 0px',
    });

    sectionElements.forEach((elem) => observer.observe(elem));

    return () => {
      observer.disconnect();
    };
  }, [setActiveId]);

  return (
    <div ref={contentElRef} {...props}>
      {sections.map(({ name, id, Content }, i) => {
        return (
          <section id={id} key={id} className={clsx('flex flex-col', sectionClassName)}>
            <header className="mb-5 flex gap-1 flex-col">
              <div className="h-10 select-none">
                <span
                  role="presentation"
                  aria-hidden="true"
                  className={cn(
                    'font-mono block text-shadow-[1px_1px,-1px_-1px,1px_-1px,-1px_1px] text-shadow-text-tertiary opacity-20 text-bg-secondary font-black tracking-tighter leading-none text-[120px] -translate-y-2 lg:-translate-y-2.5 -translate-x-14 lg:-translate-x-6',
                    'mask-linear-from-0% mask-linear-to-80% mask-linear-180 mask-linear-from-black mask-linear-to-black/0 mask-linear-to-b',
                  )}
                >
                  {`${i + 1}`.padStart(3, '0')}
                </span>
              </div>
              <h2 className="relative text-2xl font-medium tracking-wider">{name}</h2>
            </header>

            {Content && <Content />}
          </section>
        );
      })}
    </div>
  );
};
