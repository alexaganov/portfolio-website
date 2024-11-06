import { resume, ResumeDataTechnology } from "@/data";
import clsx from "clsx";
import React, { ComponentProps, useState } from "react";

interface SkillsListProps extends ComponentProps<"ul"> {
  data: ResumeDataTechnology[];
}

const SkillsList = ({ data, className, ...props }: SkillsListProps) => {
  return (
    <ul
      className={clsx("font-mono text-sm font-medium flex flex-col", className)}
      {...props}
    >
      {data.map((item, i) => {
        return (
          <li
            className="flex gap-2.5 py-2 min-h-10 border-b border-border-primary"
            key={item.id}
          >
            <span className="text-text-quaternary">
              {`${i + 1}`.padStart(2, "0")}
            </span>

            <div className="flex flex-1 max-sm:flex-col sm:justify-between gap-1 sm:gap-2">
              <p className="text-text-primary whitespace-nowrap">{item.name}</p>
              <p className="text-text-tertiary max-sm:text-xs sm:text-right">
                {item.tags.join(", ")}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const SkillsSectionContent = () => {
  return (
    <>
      <SkillsList data={resume.technologies} />
    </>
  );
};

export default SkillsSectionContent;
