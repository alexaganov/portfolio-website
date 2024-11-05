import { ArrowUpRight } from '@/components/icons/mono/ArrowUpRight'
import { NoImage } from '@/components/icons/mono/NoImage'
import { getCompanyLogoById, resume, ResumeData } from '@/data'
import { formatDate } from '@/utils/date'
import clsx from 'clsx'
import React from 'react'

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
        const formattedStartedAt = formatDate(experience.startedAt, "MMM yyyy");
        const formattedEndedAt = experience.endedAt
        ? formatDate(experience.endedAt, "MMM yyyy")
        : "present"

        return (
          <li key={experience.id} className="flex gap-4">
            <a
              target="_blank"
              href={experience.websiteUrl}
              className={clsx(
                "flex items-center sticky top-5 size-9 justify-center hover:border-border-secondary transition-colors rounded-lg border border-primary flex-shrink-0",
                {
                  "text-text-tertiary": isNoImage,
                  "text-text-secondary": !isNoImage,
                }
              )}
            >
              <Icon className="size-5" />
            </a>

            <div className="flex flex-col gap-4 pt-1">
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
                  <span aria-label={`Worked from ${formattedStartedAt} to ${formattedEndedAt}`} className="font-mono text-tertiary text-xs uppercase">
                    {formattedStartedAt} - {formattedEndedAt}
                  </span>
                </div>
              </div>

              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: experience.description }}
              />

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

export default ExperienceSectionContent