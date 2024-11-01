'use client';
import { isInViewport } from '@/utils/dom';
import React, { ComponentPropsWithRef, ComponentType, forwardRef, Ref, useEffect, useRef, useState } from 'react'
import { useSectionNav } from './SectionNavProvider';

type HomePageSectionsProps = ComponentPropsWithRef<"div"> & {
}

const HomePageSections = ({ ...props }: HomePageSectionsProps) => {
  const { setActiveId, sections } = useSectionNav();
  const contentElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElements = Array.from(contentElRef.current?.querySelectorAll('section') || []);

    const handleIntersectionObserver: IntersectionObserverCallback = (entries) => {
      const activeSection = sectionElements.find(section => {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
        const visibleHeightPercentage = visibleHeight / viewportHeight;

        return visibleHeightPercentage >= 0.5;
      });


      setActiveId(activeSection?.id)
    };

    const observer = new IntersectionObserver(handleIntersectionObserver, {
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
          <section id={id} key={id} className="min-h-screen pt-[10.125rem]">
            <header className="mb-6 flex flex-col gap-2">
              <span className="text-4xl font-mono text-tertiary">
                {`${i + 1}`.padStart(3, "0")}
              </span>
              <h2 className="text-2xl uppercase tracking-wider">{name}</h2>
            </header>

            {Content && <Content />}
          </section>
        );
      })}
    </div>
  )
}

export default HomePageSections;