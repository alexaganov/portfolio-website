"use client";
import { isFullyInView } from "@/utils/dom";
import React, { ComponentPropsWithRef, useEffect, useRef } from "react";
import { useSectionNav } from "./SectionNavProvider";
import clsx from "clsx";

type HomePageSectionsProps = ComponentPropsWithRef<"div"> & {
  sectionClassName?: string;
};

const HomePageSections = ({
  sectionClassName,
  ...props
}: HomePageSectionsProps) => {
  const { setActiveId, sections } = useSectionNav();
  const contentElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElements = Array.from(
      contentElRef.current?.querySelectorAll("section") || []
    );

    const handleIntersectionObserver: IntersectionObserverCallback = () => {
      const activeSection = sectionElements.find((section) => {
        if (isFullyInView(section)) {
          return true;
        }

        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visibleHeight = Math.max(
          0,
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
        );
        const visibleHeightPercentage = visibleHeight / viewportHeight;

        // check if 50% of section is visible because
        return visibleHeightPercentage >= 0.5;
      });

      setActiveId(activeSection?.id);
    };

    const observer = new IntersectionObserver(handleIntersectionObserver, {
      threshold: [0, 1],
      rootMargin: "0px 0px -50% 0px",
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
          <section
            id={id}
            key={id}
            className={clsx("flex flex-col", sectionClassName)}
          >
            <header className="mb-6 flex gap-2 flex-col">
              <div className="h-10 select-none">
                <span
                  role="presentation"
                  aria-hidden="true"
                  className="font-mono block mask-image-fade-b text-text-tertiary/5 font-thin tracking-tighter leading-none text-[80px] lg:text-[120px] translate-y-2 lg:-translate-y-2.5 -translate-x-3 lg:-translate-x-6"
                >
                  {`${i + 1}`.padStart(3, "0")}
                </span>
              </div>
              <h2 className="relative text-2xl uppercase tracking-wider">
                {name}
              </h2>
            </header>

            {Content && <Content />}
          </section>
        );
      })}
    </div>
  );
};

export default HomePageSections;
