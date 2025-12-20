import React, { ComponentPropsWithRef } from "react";
import { useSectionNav } from "./SectionNavProvider";
import clsx from "clsx";

type MainNavDesktopProps = ComponentPropsWithRef<"nav"> & {};

const MainNavDesktop = ({ className, ...props }: MainNavDesktopProps) => {
  const { activeId, sections } = useSectionNav();
  const activeSectionIndex = sections.findIndex(
    (section) => section.id === activeId,
  );
  const translateY =
    activeSectionIndex === -1
      ? 0
      : (activeSectionIndex / sections.length) * 100;

  return (
    <nav
      className={clsx("relative", className)}
      aria-label="Main navigation"
      {...props}
    >
      <div className="w-0.75 -my-2 left-11 flex justify-center overflow-hidden top-0 bottom-0 absolute">
        <span className="w-px absolute h-2 top-0 text-bg-primary to-current from-transparent bg-linear-to-t" />
        <div className="h-full bg-current text-text-tertiary w-px rounded-full" />
        <span className="w-px absolute h-2 bottom-0 text-bg-primary to-current from-transparent bg-linear-to-b" />

        <div
          className="min-h-full absolute top-0 ease-in-out transition-transform"
          style={{
            transform: `translateY(${translateY}%)`,
          }}
        >
          <div className="flex relative flex-col text-text-primary items-center">
            <span className="w-px h-2 top-0 from-current to-transparent bg-linear-to-t" />
            <span className="w-0.75 rounded-full h-6 bg-current" />
            <span className="w-px h-2 bottom-0 from-current to-transparent bg-linear-to-b" />
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-4">
        {sections.map(({ id, name }, i) => {
          const isActive = activeId === id;

          return (
            <li key={id} className="flex">
              <a
                onClick={(event) => {
                  event.preventDefault();

                  document.getElementById(id)?.scrollIntoView();
                }}
                href={`#${id}`}
                className={clsx("btn btn-text-primary gap-7 uppercase", {
                  "btn-text-primary-active": isActive,
                })}
              >
                <span aria-hidden="true">{`${i + 1}`.padStart(3, "0")}</span>
                <span>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNavDesktop;
