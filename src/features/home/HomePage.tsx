'use client';
import React from 'react';

import { Briefcase } from '@/components/icons/mono/Briefcase';
import { Star } from '@/components/icons/mono/Star';
import { User } from '@/components/icons/mono/User';
import { cn } from '@/utils/class-name';

import { HomePrimaryContent } from './HomePrimaryContent';
import { HomeSecondaryContent } from './HomeSecondaryContent';
import { MainNavMobile } from './MainNavMobile';
import { AboutSectionContent } from './sections/about-section-content';
import ExperienceSectionContent from './sections/ExperienceSectionContent';
import SectionNavProvider, { type SectionNavSection } from './sections/SectionNavProvider';
import { SkillsSectionContent } from './sections/SkillsSectionContent';

const sections: SectionNavSection[] = [
  {
    id: 'about',
    name: 'About',
    Content: AboutSectionContent,
    Icon: User,
  },
  {
    id: 'experience',
    name: 'Experience',
    Content: ExperienceSectionContent,
    Icon: Briefcase,
  },
  {
    id: 'skills',
    name: 'Skills',
    Content: SkillsSectionContent,
    Icon: Star,
  },
];

export const HomePage = () => {
  return (
    <SectionNavProvider sections={sections}>
      <main className={cn('relative overflow-clip lg:grid lg:grid-cols-2')}>
        <header
          id="header"
          className={cn(
            'min-h-screen lg:h-screen items-center justify-center flex lg:sticky flex-col lg:top-0',
          )}
        >
          <HomePrimaryContent
            className={cn(
              'relative flex flex-1 pb-24 pt-20 px-5 items-start justify-center md:px-10 flex-col gap-12 w-full max-h-content-height max-w-150 sm:gap-8 lg:pb-16 lg:pt-36 lg:justify-between lg:ml-auto',
            )}
          />
        </header>

        <HomeSecondaryContent data-gsap-target="content" className="max-lg:pb-24" />
      </main>

      <div className="fixed z-10 bottom-0 w-full h-24 flex items-center lg:hidden">
        <div className="absolute w-full h-full left-0 z-0 top-0 bg-linear-to-b from-transparent to-bg-secondary" />

        <MainNavMobile
          data-gsap-target="secondary"
          className="relative w-full max-w-150 px-5 md:px-10 mx-auto"
        />
      </div>
    </SectionNavProvider>
  );
};

export default HomePage;
