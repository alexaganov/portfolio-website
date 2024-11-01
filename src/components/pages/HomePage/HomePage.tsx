'use client';
import { ArrowUpRight } from '@/components/icons/mono/ArrowUpRight';
import { Email } from '@/components/icons/mono/Email';
import { Linkedin } from '@/components/icons/mono/Linkedin';
import { NoImage } from '@/components/icons/mono/NoImage';
import { Telegram } from '@/components/icons/mono/Telegram';
import { getCompanyLogoById, resume, ResumeData } from '@/data';
import clsx from 'clsx';
import React, { ComponentPropsWithRef, ComponentType, lazy } from 'react'
import HomePageSections from './HomePageSections';
import SectionNavProvider, { SectionNavSection, useSectionNav } from './SectionNavProvider';
import MainNavDesktop from './MainNavDesktop';


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

const AboutSectionContent = () => {
  return (
    <div className='space-y-6 leading-[1.75] text-tertiary font-light'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}

const formatDate = (date: Date | number | string) => {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric'
  }).format(new Date(date))
}

const ExperienceSectionContent = () => {
  const skillById = resume.technologies.reduce((acc, skill) => {
    acc[skill.id] = skill;

    return acc;
  }, {} as Record<string, ResumeData['technologies'][number]>)

  return (
    <ul className='flex flex-col gap-10'>
      {resume.experience.map((experience) => {
        const Icon = getCompanyLogoById(experience.id) || NoImage;
        const isNoImage = Icon === NoImage;

        return (
          <li key={experience.id} className="flex gap-4">
            <span className={clsx("flex items-center size-9 justify-center rounded-lg border border-primary flex-shrink-0", {
              "text-tertiary": isNoImage
            })}>
              <Icon className='size-5' />
            </span>

            <div className="flex flex-col gap-3 pt-1">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold">
                  {experience.websiteUrl && (
                    <a
                      href={experience.websiteUrl}
                      className="group inline-flex items-center hover:underline gap-1.5"
                      target="_blank"
                    >
                      {experience.companyName}

                      <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}

                  {!experience.websiteUrl && experience.companyName}
                </h3>

                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <p>{experience.position}</p>
                  <span className="font-mono text-tertiary text-xs uppercase">
                    {formatDate(experience.startedAt)} -{" "}
                    {experience.endedAt
                      ? formatDate(experience.endedAt)
                      : "present"}
                  </span>
                </div>
              </div>

              <div className="leading-[1.75] text-tertiary font-light">
                {experience.description}
              </div>

              <ul
                aria-label="Technologies used"
                className="flex flex-wrap gap-2"
              >
                {experience.technologyIds.map((skillId) => {
                  return (
                    <li
                      key={skillId}
                      className="rounded-full hover:text-primary hover:border-secondary transition-colors inline-flex font-mono gap-1.5 select-none items-center border border-primary text-tertiary px-2.5 py-1 min-h-7 text-xs"
                    >
                      {skillById[skillId]?.name || skillId}
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  )
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
      <ul className="flex flex-wrap-reverse gap-x-6 gap-y-1.5">
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
    Content: ExperienceSectionContent
  },
  {
    id: 'skills',
    name: 'Skills',
  }
];

export const HomePage = () => {
  const contacts = getContactsList();

  return (
    <SectionNavProvider sections={sections}>
      <main className="relative grid grid-cols-2">
        <header className="h-screen sticky flex flex-col justify-end top-0">
          <div className="max-h-20 flex-shrink h-full" />
          <div className="flex h-full flex-col justify-between max-w-[600px] p-10">
            <div>
              <span className="rounded-full inline-flex font-mono gap-1.5 select-none items-center border text-success border-success px-2.5 py-1 min-h-7 text-xs mb-3.5">
                <span className="relative flex text-success h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                  <span className="relative inline-flex rounded-full w-full h-full bg-current"></span>
                </span>
                available for hire
              </span>

              <h1 className="uppercase font-bold text-4xl tracking-wider mb-2">
                {resume.firstName} {resume.lastName}
              </h1>

              <p className="capitalize text-2xl mb-6">{resume.position}</p>

              <p className="leading-[1.75] text-secondary font-light">
                {resume.shortDescription}
              </p>
            </div>

            <MainNavDesktop className="my-10" />

            <ContactsList aria-label="Contacts" items={contacts} />
          </div>
        </header>

        <div className="bg-secondary flex flex-col rounded-l-xl">
          <HomePageSections className="max-w-[600px] px-10" />
        </div>
      </main>
    </SectionNavProvider>
  );
}

export default HomePage