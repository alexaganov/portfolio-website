import React, { ComponentPropsWithRef } from 'react'
import { useSectionNav } from './SectionNavProvider';
import clsx from 'clsx';
import { ArrowUp } from '@/components/icons/mono/ArrowUp';

type MainNavMobileProps = ComponentPropsWithRef<"div"> & {
}

const MainNavMobile = ({ className, ...props }: MainNavMobileProps) => {
  const { activeId, sections } = useSectionNav();
  const activeSectionIndex = sections.findIndex(section => section.id === activeId);
  const activeSection = activeSectionIndex !== -1 ? sections[activeSectionIndex] : null;
  const hasActiveSection = activeSectionIndex !== -1
  const translateX = hasActiveSection ? activeSectionIndex / sections.length * 100 : 0;

  return (
    <div className={clsx("flex gap-2", className)} {...props}>
      <nav
        className="rounded-full overflow-hidden bg-tertiary flex-1 p-1.5"
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
                    href={`#${id}`}
                    className={clsx(
                      "flex h-full items-center justify-center text-center w-full font-mono text-xs uppercase transition-colors hover:text-primary",
                      {
                        "text-primary": isActive,
                        "text-tertiary": !isActive,
                      }
                    )}
                  >
                    {shortName && (
                      <span className="sm:hidden">{shortName}</span>
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
        href={activeSection ? "#header" : `#${sections[0].id}`}
        className={clsx("aspect-square h-14 items-center justify-center  ease-in-out flex flex-shrink-0 rounded-full", {
          "text-primary bg-bg-quaternary": hasActiveSection,
            "text-tertiary bg-bg-tertiary": !hasActiveSection,
        })}
      >
        <ArrowUp
          className={clsx("size-5 transition-all", {
            "-rotate-180": !hasActiveSection,
          })}
        />
      </a>
    </div>
  );
}

export default MainNavMobile