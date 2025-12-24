import clsx from 'clsx';
import React, { type ComponentPropsWithRef } from 'react';

import { cn } from '@/utils/class-name';

import { useSectionNav } from './sections/section-nav-provider';
import { useSlinkyNavIndicator } from '../../hooks/use-slinky-nav-indicator';

type MainNavDesktopProps = ComponentPropsWithRef<'nav'> & {};

export const MainNavDesktop = ({ className, ...props }: MainNavDesktopProps) => {
  const { activeId, sections } = useSectionNav();
  const { indicatorRef, navRef } = useSlinkyNavIndicator(
    activeId ? `[data-nav-item="${activeId}"]` : null,
    {
      // topOffset: -3,
      // heightOffset: 5,
    },
  );

  return (
    <nav
      ref={navRef}
      className={clsx('relative', className)}
      aria-label="Main navigation"
      {...props}
    >
      <div
        ref={indicatorRef}
        className="absolute -left-1.5 clip-path-skewed-hex-1.5 w-10 bg-text-primary -top-1"
      >
        {/* <span className="absolute top-0 right-[6px] w-px h-[calc(100%-6px)] bg-bg-primary" />
        <span className="absolute bottom-[5px] left-0 w-[calc(100%-6px)] h-px bg-bg-primary" />
        <span className="absolute -right-px -bottom-[2px] w-[10px] origin-right h-px rotate-45 bg-bg-primary" /> */}
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
                data-nav-item={id}
                href={`#${id}`}
                className={cn(
                  'font-mono group inline-flex gap-3 items-baseline transition-colors',
                  {
                    'text-text-primary': isActive,
                    'text-text-tertiary hover:text-text-primary': !isActive,
                  },
                )}
              >
                <span className={cn('mix-blend-difference')}>{`${i + 1}`.padStart(3, '0')}</span>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
