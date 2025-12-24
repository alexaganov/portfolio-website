import React from 'react';

import { ExternalLink } from '@/components/common/ExternalLink';
import { NoImage } from '@/components/icons/mono/NoImage';
import { getCompanyLogoById, resume, type ResumeData } from '@/data';
import { cn } from '@/utils/class-name';
import { formatDate } from '@/utils/date';

const ExperienceSectionContent = () => {
  const skillById = resume.technologies.reduce(
    (acc, skill) => {
      acc[skill.id] = skill;

      return acc;
    },
    {} as Record<string, ResumeData['technologies'][number]>,
  );

  return (
    <ul className="flex flex-col -mt-3.5">
      {resume.experience.map((experience) => {
        const Icon = getCompanyLogoById(experience.id) || NoImage;
        const formattedStartedAt = formatDate(experience.startedAt, 'MMM yyyy');
        const formattedEndedAt = experience.endedAt
          ? formatDate(experience.endedAt, 'MMM yyyy')
          : 'present';

        const ariaLabel = `Open ${experience.company.name}'s website`;

        return (
          <li key={experience.id} className="flex flex-col">
            <h3 className="text-lg sticky bg-bg-secondary/50 -mx-5 px-5 rounded-b-xl lg:-mx-10 lg:px-10 backdrop-blur-md flex items-center gap-4 z-1 top-0 py-3.5 font-bold">
              {experience.company.websiteUrl && (
                <ExternalLink href={experience.company.websiteUrl} aria-label={ariaLabel}>
                  <span
                    aria-label={`${experience.company.name}'s logo`}
                    className={cn(
                      'btn btn-icon-md btn-outline-muted group-hover:btn-outline-muted-active align-middle mr-3',
                    )}
                  >
                    <Icon className="btn-s-icon" />
                  </span>
                  <span>{experience.company.name}</span>
                </ExternalLink>
              )}

              {!experience.company.websiteUrl && experience.company.name}
            </h3>

            <div className="flex flex-col gap-4 pb-10">
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <p>{experience.position}</p>
                <span
                  aria-label={`Worked from ${formattedStartedAt} to ${formattedEndedAt}`}
                  className="font-mono text-text-tertiary text-xs uppercase"
                >
                  {formattedStartedAt} - {formattedEndedAt}
                </span>
              </div>

              <div className="prose" dangerouslySetInnerHTML={{ __html: experience.description }} />

              <ul aria-label="Technologies used" className="flex flex-wrap gap-1.5">
                {experience.technologyIds.map((skillId) => {
                  return (
                    <li key={skillId} className="tag tag-md tag-solid-muted tag-pill">
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
  );
};

export default ExperienceSectionContent;
