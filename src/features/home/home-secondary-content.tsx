import clsx from 'clsx';
import React, { type ComponentProps } from 'react';

import CopyButton from '@/components/common/copy-button';
import { ExternalLink } from '@/components/common/external-link';
import { Github } from '@/components/icons/mono/github';
import { resume } from '@/data';

import { ContactsNav } from './contacts-nav';
import { HomePageSections } from './home-page-sections';

type HomeSecondaryContentProps = ComponentProps<'div'>;

export const HomeSecondaryContent = ({ className, ...props }: HomeSecondaryContentProps) => {
  return (
    <div
      className={clsx('bg-bg-secondary relative items-center flex flex-col', className)}
      {...props}
    >
      <div className="max-lg:hidden z-10 sticky top-0 pointer-events-none w-full h-0">
        <div className="h-34 bg-liner-to-t from-transparent to-bg-secondary" />
      </div>

      <div className="pb-2 lg:pt-[calc((100vh-var(--spacing-content-height))/2)] max-w-150 lg:mr-auto lg:pb-[calc((100vh-820px)/2+64px)] px-5 md:px-10">
        <HomePageSections sectionClassName="pt-20 lg:pt-36 lg:scroll-mt-[calc((100vh-820px)/2)]" />

        <footer className="mt-20 relative z-1 flex items-center lg:items-end flex-col gap-12">
          <div className="lg:hidden flex flex-col gap-3 items-center">
            <ContactsNav />
            <CopyButton value={resume.email} />
          </div>

          <ExternalLink
            href="https://github.com/alexaganov/portfolio-website"
            className="font-mono text-sm"
            Icon={Github}
          >
            View Source Code
          </ExternalLink>
        </footer>
      </div>

      <div className="max-lg:hidden z-10 sticky bottom-0 pointer-events-none w-full h-0">
        <div className="h-16 -translate-y-full bg-linear-to-b from-transparent to-bg-secondary" />
      </div>
    </div>
  );
};
