import { Email } from '@/components/icons/mono/Email';
import { Linkedin } from '@/components/icons/mono/Linkedin';
import { Telegram } from '@/components/icons/mono/Telegram';
import { resume, ResumeData } from '@/data';
import React, { ComponentType } from 'react'


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

const ExperienceSectionContent = () => {
  const skillById = resume.skills.reduce((acc, skill) => {
    acc[skill.id] = skill;

    return acc;
  }, {} as Record<string, ResumeData['skills'][number]>)

  return (
    <ul className='flex flex-col gap-10'>
      {resume.experience.map((experience) => {
        return (
          <li key={experience.id} className='flex gap-3'>
            <span className='flex items-center size-9 justify-center rounded-lg border border-primary flex-shrink-0'>

            </span>

            <div className='flex flex-col gap-3 pt-1'>
              <div className='flex flex-col gap-1'>
                <h3 className='text-lg font-bold'>
                  {experience.companyName}
                </h3>

                <div className='flex justify-between items-baseline flex-wrap gap-1'>
                  <p>
                    {experience.position}
                  </p>
                  <span className='font-mono text-tertiary text-xs uppercase'>
                    From - TO
                  </span>
                </div>
              </div>

              <div className='leading-[1.75] text-tertiary font-light'>
                {experience.description}
              </div>

              <ul aria-label='Technologies used' className='flex flex-wrap gap-3'>
                {experience.skillIds.map((skillId) => {
                  return (
                    <li
                      key={skillId}
                      className="rounded-full inline-flex font-mono gap-1.5 select-none items-center border border-primary text-tertiary px-2.5 py-1 min-h-7 text-xs"
                    >
                      {skillById[skillId]?.name || skillId}
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export const HomePage = () => {
  const contacts = getContactsList();

  const sections: {
    id: string;
    name: string;
    Component?: ComponentType;
  }[] = [
    {
      id: 'about',
      name: 'About',
      Component: AboutSectionContent
    },
    {
      id: 'experience',
      name: 'Experience',
      Component: ExperienceSectionContent
    },
    {
      id: 'skills',
      name: 'Skills',
    }
  ];

  return (
    <main className="relative grid grid-cols-2">
      <header className="h-screen sticky flex flex-col justify-end top-0">
        <div className='max-h-20 flex-shrink h-full' />
        <div className='flex h-full flex-col justify-between max-w-[600px] p-10'>
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

            <p className='capitalize text-2xl mb-6'>{resume.position}</p>

            <p className='leading-[1.75] text-secondary font-light'>{resume.shortDescription}</p>
          </div>

          <nav className='my-10 relative' aria-label="Main navigation">
            <div
              style={{

              }}
              className='w-px left-11 bg-current text-tertiary absolute h-full'
            />
            <ul className="flex flex-col gap-4">
              {sections.map(({ id, name }, i) => {
                return (
                  <li key={id} className="flex">
                    <a href={`#${id}`} className="flex font-mono gap-7 uppercase text-tertiary transition-colors hover:text-primary">
                      <span>{`${i + 1}`.padStart(3, "0")}</span>
                      <span>{name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <nav aria-label="Contacts">
            <ul className="flex flex-wrap gap-6">
              {contacts.map(({ id, name, Icon, url }) => {
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
        </div>
      </header>
              {/* 80 + 40 + 42 = 162 */}
      <div className='bg-secondary flex flex-col rounded-l-xl'>
        <div className="max-w-[600px] px-10">
          {sections.map(({ name, id, Component }, i) => {
            return (
              <section id={id} key={id} className="min-h-screen pt-[10.125rem]">
                <header className='mb-6 flex flex-col gap-2'>
                  <span className='text-4xl font-mono text-tertiary'>
                    {`${i + 1}`.padStart(3, '0')}
                  </span>
                  <h2 className='text-2xl uppercase tracking-wider'>{name}</h2>
                </header>

                {Component && <Component />}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default HomePage