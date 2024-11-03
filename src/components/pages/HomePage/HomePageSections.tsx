'use client';
import { isFullyInView } from '@/utils/dom';
import React, { ComponentPropsWithRef, ComponentType, forwardRef, Ref, useEffect, useRef, useState } from 'react'
import { useSectionNav } from './SectionNavProvider';
import clsx from 'clsx';

type HomePageSectionsProps = ComponentPropsWithRef<"div"> & {
  sectionClassName?: string;
}

const HomePageSections = ({ sectionClassName, ...props }: HomePageSectionsProps) => {
  const { setActiveId, sections } = useSectionNav();
  const contentElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElements = Array.from(contentElRef.current?.querySelectorAll('section') || []);

    const handleIntersectionObserver: IntersectionObserverCallback = (entries) => {
      const activeSection = sectionElements.find(section => {
        if (isFullyInView(section)) {
          return true;
        }

        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
        const visibleHeightPercentage = visibleHeight / viewportHeight;

        // check if 50% of section is visible because
        return visibleHeightPercentage >= 0.5;
      });

      setActiveId(activeSection?.id)
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
            <header className="mb-6 flex flex-col gap-2">
              <span className="text-4xl font-mono text-text-quaternary">
                {`${i + 1}`.padStart(3, "0")}
              </span>
              <h2 className="text-2xl uppercase tracking-wider">{name}</h2>
            </header>

            {Content && <Content />}

            {/* <div className='flex-1 mt-20' style={{
              backgroundColor: 'transparent',
              // opacity: 0.2,
              backgroundImage: 'radial-gradient(#707070 0.5px, transparent 0.5px)',
              backgroundSize: '15px 15px'
              // backgroundColor: '#000',
              // opacity: 0.2,
              // backgroundImage:  'repeating-radial-gradient( circle at 0 0, transparent 0, #5e5e5e 11px ), repeating-linear-gradient( #000, #000000 )'

              // "backgroundColor": "#e5e5f7",
              // opacity: 0.1,
              // backgroundImage:  'linear-gradient(135deg, #000000 25%, transparent 25%), linear-gradient(225deg, #000000 25%, transparent 25%), linear-gradient(45deg, #000000 25%, transparent 25%), linear-gradient(315deg, #000000 25%, #e5e5f7 25%)',
              // backgroundPosition:  '11px 0, 11px 0, 0 0, 0 0',
              // backgroundSize: '22px 22px',
              // backgroundRepeat: 'repeat'
            }} /> */}
          </section>
        );
      })}
    </div>
  )
}

export default HomePageSections;