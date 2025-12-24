import clsx from 'clsx';
import React, { type ComponentProps } from 'react';

import CopyButton from '@/components/common/CopyButton';
import { ExternalLink } from '@/components/common/ExternalLink';
import { getCompanyLogoById, resume, type ResumeExperience } from '@/data';

import { ContactsNav } from './ContactsNav';
import MainNavDesktop from './MainNavDesktop';

type HomePrimaryContentProps = ComponentProps<'div'>;

const ExperienceTag = ({ experience }: { experience: ResumeExperience }) => {
  const Icon = getCompanyLogoById(experience.company.id);

  return (
    <span
      data-gsap-target="secondary"
      style={{
        color: experience.company.brandColor,
      }}
      className="rounded-full inline-flex font-mono gap-1.5 select-none text-current/0 border-current/40 items-center border px-2.5 py-1 min-h-7 text-xs"
    >
      {Icon && (
        // eslint-disable-next-line react-hooks/static-components
        <Icon className="size-3" />
      )}
      {experience.company.name}
      {experience.company.location && ` · ${experience.company.location}`}
    </span>
  );
};

export const HomePrimaryContent = ({ className, ...props }: HomePrimaryContentProps) => {
  const presentExperience = resume.experience.find((experience) => !experience.endedAt);

  return (
    <div className={clsx(className)} aria-label="Contacts" {...props}>
      <div className="relative flex flex-col items-start">
        {/* making it absolute to not depend on height of this element
              for calc top padding of the right content on large devices */}
        {(resume.isAvailableForHire || !!presentExperience) && (
          <div className="absolute flex gap-3 items-center left-0 -translate-y-full pb-3.5">
            {resume.isAvailableForHire && (
              <span
                data-gsap-target="secondary"
                className="rounded-full inline-flex font-mono gap-1.5 select-none items-center border text-success border-success/30 px-2.5 py-1 min-h-7 text-xs"
              >
                <span className="relative flex text-success h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                  <span className="relative inline-flex rounded-full w-full h-full bg-current"></span>
                </span>
                available for hire
              </span>
            )}

            {presentExperience && <ExperienceTag experience={presentExperience} />}
          </div>
        )}

        <div className=" sm:mb-2">
          <h1 className="overflow-hidden relative uppercase font-bold text-3xl sm:text-4xl tracking-wider">
            {[resume.firstName, resume.lastName].map((word, i, items) => {
              const isLast = i === items.length - 1;

              return (
                <span
                  data-gsap-target="title-word"
                  key={word}
                  className="inline-block whitespace-pre"
                >
                  {word}
                  {!isLast && ' '}
                </span>
              );
            })}
          </h1>
        </div>

        <div className="mb-2.5 overflow-hidden sm:mb-3">
          <p className="overflow-hidden relative text-2xl sm:text-2xl">
            {resume.position.split(' ').map((word, i, items) => {
              const isLast = i === items.length - 1;

              return (
                <span
                  data-gsap-target="subtitle-word"
                  key={word}
                  className="inline-block whitespace-pre"
                >
                  {word}
                  {!isLast && ' '}
                </span>
              );
            })}
          </p>
        </div>

        <div className="mb-4">
          <p
            data-gsap-target="secondary"
            className="leading-[1.75] text-text-secondary font-light text-balance"
            dangerouslySetInnerHTML={{ __html: resume.shortDescription }}
          />
        </div>

        <div className="flex items-start flex-col gap-y-4 gap-x-8">
          <ContactsNav data-gsap-target="secondary" />

          <CopyButton data-gsap-target="secondary" value={resume.email} />
        </div>
      </div>

      <div className="max-lg:hidden my-auto">
        <MainNavDesktop data-gsap-target="secondary" />
      </div>

      <div data-gsap-target="secondary">
        <ExternalLink href={resume.resumeUrl} className="font-mono text-sm">
          View Resume to Learn More
        </ExternalLink>
      </div>
    </div>
  );
};
