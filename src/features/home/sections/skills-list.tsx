import clsx from 'clsx';
import { type ComponentProps } from 'react';

export interface SkillListItem {
  id: string;
  name: string;
  tags: string[];
  position: number;
  isHighlighted: boolean;
}

interface SkillsListProps extends ComponentProps<'ul'> {
  data: SkillListItem[];
}

export const SkillsList = ({ data, className, ...props }: SkillsListProps) => {
  return (
    <ul
      className={clsx('font-mono text-sm relative z-0 font-medium flex flex-col', className)}
      {...props}
    >
      {data.map((item) => {
        return (
          <li
            style={{
              zIndex: item.isHighlighted ? 0 : data.length * -1,
            }}
            data-gsap-target="skill-item"
            className={clsx(
              'flex bg-bg-secondary gap-2.5 min-h-12 items-center border-b border-border-primary',
              {
                'opacity-30': !item.isHighlighted,
              },
            )}
            key={item.id}
          >
            <span className="text-text-tertiary">{`${item.position}`.padStart(2, '0')}</span>

            <div className="flex flex-1 justify-between items-baseline flex-wrap gap-y-0.5 gap-x-2">
              <p className="text-text-primary whitespace-nowrap">{item.name}</p>
              <p className="text-text-tertiary max-sm:text-xs sm:text-right">
                {item.tags.join(', ')}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
