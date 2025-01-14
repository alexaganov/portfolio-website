import clsx from "clsx";
import { ComponentProps } from "react";

export interface SkillListItem {
  id: string;
  name: string;
  tags: string[];
  position: number;
  isHighlighted: boolean;
}

interface SkillsListProps extends ComponentProps<"ul"> {
  data: SkillListItem[];
}

export const SkillsList = ({ data, className, ...props }: SkillsListProps) => {
  return (
    <ul
      className={clsx("font-mono text-sm font-medium flex flex-col", className)}
      {...props}
    >
      {data.map((item) => {
        return (
          <li
            className={clsx(
              "flex gap-2.5 py-2 min-h-10 border-b border-border-primary",
              {
                "opacity-30": !item.isHighlighted,
              }
            )}
            key={item.id}
          >
            <span className="text-text-tertiary">
              {`${item.position}`.padStart(2, "0")}
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
