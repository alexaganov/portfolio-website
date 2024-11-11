import React, { ComponentPropsWithRef } from "react";
import { useSectionNav } from "./SectionNavProvider";
import clsx from "clsx";
import { ArrowUp } from "@/components/icons/mono/ArrowUp";

type MainNavMobileProps = ComponentPropsWithRef<"div"> & {};

const MainNavMobile = ({ className, ...props }: MainNavMobileProps) => {
  const { activeId, sections } = useSectionNav();
  const activeSectionIndex = sections.findIndex(
    (section) => section.id === activeId
  );
  const activeSection =
    activeSectionIndex !== -1 ? sections[activeSectionIndex] : null;
  const hasActiveSection = activeSectionIndex !== -1;
  const translateX = hasActiveSection
    ? (activeSectionIndex / sections.length) * 100
    : 0;

  return (
    <div className={clsx("flex gap-2", className)} {...props}>
      <nav
        className="rounded-full overflow-hidden bg-bg-tertiary flex-1 p-1.5"
        aria-label="Main navigation"
      >
        <div className="relative rounded-full overflow-hidden h-full">
          <div
            style={{
              transform: `translateX(${translateX}%)`,
            }}
            className={clsx(
              "h-full w-full flex transition-all duration-300 ease-in-out absolute left-0 top-0",
              {
                "opacity-0": !hasActiveSection,
              }
            )}
          >
            <div
              style={{
                width: `${100 / sections.length}%`,
              }}
              className="h-full rounded-full transition-transform bg-bg-quaternary"
            />
          </div>

          <ul className="flex h-full relative">
            {sections.map(({ id, name, shortName }) => {
              const isActive = activeId === id;

              return (
                <li key={id} className="flex flex-1">
                  <a
                    onClick={(event) => {
                      event.preventDefault();

                      document.getElementById(id)?.scrollIntoView();
                    }}
                    href={`#${id}`}
                    className={clsx(
                      "flex h-full items-center justify-center text-center w-full font-mono text-xs uppercase transition-colors hover:text-text-primary",
                      {
                        "text-text-primary": isActive,
                        "text-text-secondary": !isActive,
                      }
                    )}
                  >
                    {shortName && (
                      <span aria-label={name} className="sm:hidden">
                        {shortName}
                      </span>
                    )}

                    <span
                      className={clsx({
                        "max-sm:hidden": shortName,
                      })}
                    >
                      {name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <a
        onClick={(event) => {
          event.preventDefault();

          document
            .getElementById(activeSection ? "header" : sections[0].id)
            ?.scrollIntoView();
        }}
        aria-label={
          activeSection ? "Scroll to the top" : "Scroll to the next section"
        }
        href="#"
        className={clsx(
          "aspect-square h-14 items-center justify-center  ease-in-out flex flex-shrink-0 rounded-full",
          {
            "text-text-primary bg-bg-quaternary": hasActiveSection,
            "text-text-secondary bg-bg-tertiary": !hasActiveSection,
          }
        )}
      >
        <ArrowUp
          className={clsx("size-5 transition-all", {
            "-rotate-180": !hasActiveSection,
          })}
        />
      </a>
    </div>
  );
};

export default MainNavMobile;
