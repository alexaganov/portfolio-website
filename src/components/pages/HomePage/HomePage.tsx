'use client';
import { ArrowUpRight } from '@/components/icons/mono/ArrowUpRight';
import { Email } from '@/components/icons/mono/Email';
import { Linkedin } from '@/components/icons/mono/Linkedin';
import { NoImage } from '@/components/icons/mono/NoImage';
import { Telegram } from '@/components/icons/mono/Telegram';
import { getCompanyLogoById, resume, ResumeData, ResumeDataTechnology } from '@/data';
import clsx from 'clsx';
import React, { ComponentPropsWithRef, ComponentType, lazy, ReactNode } from 'react'
import HomePageSections from './HomePageSections';
import SectionNavProvider, { SectionNavSection, useSectionNav } from './SectionNavProvider';
import MainNavDesktop from './MainNavDesktop';
import MainNavMobile from './MainNavMobile';
import SkillsSectionContent from './SkillsSectionContent';
import ExperienceSectionContent from './ExperienceSectionContent';
import AboutSectionContent from './AboutSectionContent';


const getContactsList = (): {
  Icon: ComponentType<{ className?: string }>;
  id: string;
  name: string;
  url: string;
}[] => {
  return [
    {
      Icon: Telegram,
      id: 'telegram',
      name: 'telegram',
      url: `https://t.me/${resume.socialHandles.telegram}`
    },
    {
      Icon: Linkedin,
      id: 'linkedin',
      name: 'linkedin',
      url: `https://www.linkedin.com/in/${resume.socialHandles.linkedin}`
    },
    {
      Icon: Email,
      id: 'email',
      name: resume.email,
      url: `mailto:${resume.email}`
    }
  ]
}

type ContactsListProps =ComponentPropsWithRef<"nav"> & {
  items: {
    Icon: ComponentType<{ className?: string }>;
    id: string;
    name: string;
    url: string;
  }[]
}

const ContactsList = ({ items, ...props}: ContactsListProps) => {
  return (
    <nav {...props}>
      <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
        {items.map(({ id, name, Icon, url }) => {
          return (
            <li key={id}>
              <a
                target="_blank"
                href={url}
                className="gap-2.5 inline-flex text-sm text-tertiary hover:text-primary hover:underline font-mono transition-colors"
              >
                <Icon className="size-5 flex-shrink-0" />
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

const sections: SectionNavSection[] = [
  {
    id: 'about',
    name: 'About',
    Content: AboutSectionContent
  },
  {
    id: 'experience',
    name: 'Experience',
    shortName: 'Exp',
    Content: ExperienceSectionContent
  },
  {
    id: 'skills',
    name: 'Skills',
    Content: SkillsSectionContent
  }
];

export const HomePage = () => {
  const contacts = getContactsList();

  return (
    <SectionNavProvider sections={sections}>
      <main className="relative lg:grid lg:grid-cols-2">
        <header
          id="header"
          className={clsx(
            "min-h-screen lg:h-screen items-center flex lg:sticky flex-col lg:top-0"
          )}
        >
          <div className="flex flex-1 pb-24 pt-10 px-5 justify-center md:px-10 flex-col gap-8 max-w-[600px] sm:gap-8 lg:pb-14 lg:pt-[7.5rem] lg:justify-between lg:ml-auto">
            <div className='flex flex-col items-start'>
              <span className="rounded-full inline-flex font-mono gap-1.5 select-none items-center border text-success border-success px-2.5 py-1 min-h-7 text-xs mb-3.5">
                <span className="relative flex text-success h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                  <span className="relative inline-flex rounded-full w-full h-full bg-current"></span>
                </span>
                available for hire
              </span>

              <h1 className="uppercase font-bold  text-2xl sm:text-4xl tracking-wider sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">
                {resume.firstName} {resume.lastName}
              </h1>

              <p className="capitalize text-lg mb-4 sm:text-2xl sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">
                {resume.position}
              </p>

              <p
                className="leading-[1.75] text-text-secondary font-light"
                dangerouslySetInnerHTML={{ __html: resume.shortDescription }}
              />
            </div>

            <ContactsList
              aria-label="Contacts"
              items={contacts}
            />

            <MainNavDesktop className="mt-auto max-lg:hidden" />
          </div>
        </header>

        <div className="bg-secondary relative items-center flex flex-col rounded-t-xl lg:rounded-l-xl">
          <div className='max-lg:hidden sticky top-0 pointer-events-none w-full h-0'>
            <div className='h-[8.5rem] bg-gradient-to-t from-transparent to-bg-secondary' />
          </div>

          <HomePageSections
            sectionClassName="pt-14 md:pt-20 last:min-h-screen last:max-lg:pb-[8.5rem] lg:pt-[10.125rem]"
            className="max-w-[600px] lg:mr-auto px-5 md:px-10"
          />

          <div className='max-lg:hidden sticky bottom-0 pointer-events-none w-full h-0'>
            <div className='h-[8.5rem] -translate-y-full bg-gradient-to-b from-transparent to-bg-secondary' />
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 w-full h-24 flex items-center lg:hidden">
        <div className="absolute w-full h-full left-0 z-0 top-0 bg-gradient-to-b from-transparent to-bg-primary" />
        <MainNavMobile className="relative w-full max-w-[600px] px-5 md:px-10 mx-auto" />
      </div>
    </SectionNavProvider>
  );
}

export default HomePage