import React, { type ComponentProps } from 'react';

import { cn } from '@/utils/class-name';

import { ExternalLink as ExternalLinkIcon } from '../icons/mono/ExternalLink';

type ExternalLinkProps = ComponentProps<'a'> & {
  Icon?: typeof ExternalLinkIcon;
};

export const ExternalLink = ({
  href,
  rel = 'noopener noreferrer',
  target = '_blank',
  children,
  Icon = ExternalLinkIcon,
  className,
  ...props
}: ExternalLinkProps) => {
  return (
    <a
      href={href}
      rel={rel}
      target={target}
      className={cn('inline-block group hover:underline underline-offset-4', className)}
      {...props}
    >
      {children}
      <Icon
        aria-hidden="true"
        className="size-[0.95em] inline-block align-baseline relative top-[0.14em] text-text-tertiary group-hover:text-text-primary ml-2 transition-colors"
      />
    </a>
  );
};
