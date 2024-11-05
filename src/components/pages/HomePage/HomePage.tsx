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
import { ExternalLink } from '@/components/icons/mono/ExternalLink';
import { Github } from '@/components/icons/mono/Github';
import ContactsNav, { ContactsNavProps } from './ContactsNav';
import { TelegramFilled } from '@/components/icons/mono/TelegramFilled';
import { LinkedinBold } from '@/components/icons/mono/LinkedinBold';
import { GithubFilled } from '@/components/icons/mono/GithubFilled';
import { EmailFilled } from '@/components/icons/mono/EmailFilled';
import Link from 'next/link';
import CopyButton from '@/components/common/CopyButton';

const contacts: ContactsNavProps['items'] = [
  {
    Icon: TelegramFilled,
    id: 'telegram',
    name: 'telegram',
    url: `https://t.me/${resume.socialHandles.telegram}`
  },
  {
    Icon: LinkedinBold,
    id: 'linkedin',
    name: 'linkedin',
    url: `https://www.linkedin.com/in/${resume.socialHandles.linkedin}`
  },
  {
    Icon: GithubFilled,
    id: 'github',
    name: 'github',
    url: `https://github.com/${resume.socialHandles.github}`
  },
  {
    Icon: EmailFilled,
    id: 'email',
    name: resume.email,
    url: `mailto:${resume.email}`,
  }
]

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
  return (
    <SectionNavProvider sections={sections}>
      <main className="relative lg:grid lg:grid-cols-2">
        <header
          id="header"
          className={clsx(
            "min-h-screen lg:h-screen items-center flex lg:sticky flex-col lg:top-0"
          )}
        >
          <div
            className={clsx(
              "relative flex flex-1 pb-24 pt-10 px-5 justify-center md:px-10 flex-col gap-12 max-w-[600px] sm:gap-8 lg:pb-16 lg:pt-[7.5rem] lg:justify-between lg:ml-auto"
            )}
          >

            <div className="flex flex-col items-start">
              <div className='flex gap-4 items-center mb-3.5'>
                <span className="rounded-full inline-flex font-mono gap-1.5 select-none items-center border text-success border-success px-2.5 py-1 min-h-7 text-xs ">
                  <span className="relative flex text-success h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                    <span className="relative inline-flex rounded-full w-full h-full bg-current"></span>
                  </span>
                  available for hire
                </span>
              </div>

              <h1 className="uppercase font-bold mb-1 text-2xl sm:text-4xl tracking-wider sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">
                {resume.firstName} {resume.lastName}
              </h1>

              <p className="capitalize text-lg mb-4 sm:text-2xl sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">
                {resume.position}
              </p>

              <p
                className="leading-[1.75] text-text-secondary mb-6 font-light text-balance"
                dangerouslySetInnerHTML={{ __html: resume.shortDescription }}
              />

              <div className='flex flex-col gap-y-4 gap-x-8'>
                <ContactsNav aria-label="Contacts" items={contacts} />
                <CopyButton value={resume.email} />
              </div>
            </div>


            <MainNavDesktop className="my-auto max-lg:hidden" />

            <a
              target="_blank"
              href={resume.resumeUrl}
              className="text-sm transition-all items-center max-lg:bottom-24 inline-flex gap-1.5 font-mono hover:underline text-text-primary"
            >
              View Resume to Learn More
              <ExternalLink className="size-4" />
            </a>
          </div>
        </header>

        <div className="bg-secondary relative items-center flex flex-col rounded-t-xl lg:rounded-l-xl">
          <div className="max-lg:hidden sticky top-0 pointer-events-none w-full h-0">
            <div className="h-[8.5rem] bg-gradient-to-t from-transparent to-bg-secondary" />
          </div>

          <div className="pb-24 max-w-[600px] lg:mr-auto lg:pb-16 px-5 md:px-10">
            <HomePageSections
              sectionClassName="pt-20 lg:pt-[10.125rem]"
            />

            <footer className="mt-20 flex items-center lg:items-end flex-col gap-12">
              <div className='lg:hidden flex flex-col gap-4 items-center'>
                <ContactsNav aria-label="Contacts"  items={contacts} />
                <CopyButton value={resume.email} />
              </div>

              <div className="text-sm font-mono text-center flex-col items-center lg:text-right lg:items-end ">
                <p className='text-text-quaternary '>
                  Designed and Developed by <Link className="text-text-tertiary transition-colors hover:text-text-primary inline-flex gap-1.5 hover:underline" href="/">Aleksandr Aganov.</Link>
                </p>
                <a
                  target="_blank"
                  className="inline-flex gap-1.5 text-text-tertiary transition-colors hover:text-text-primary hover:underline"
                  href="https://github.com/alexaganov/portfolio-website"
                >
                  View Source Code
                  <Github className="size-4" />
                </a>
              </div>
            </footer>
          </div>

          <div className="max-lg:hidden sticky bottom-0 pointer-events-none w-full h-0">
            <div className="h-16 -translate-y-full bg-gradient-to-b from-transparent to-bg-secondary" />
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