"use client";
import { resume } from "@/data";
import clsx from "clsx";
import React, { useState } from "react";
import HomePageSections from "./HomePageSections";
import SectionNavProvider, { SectionNavSection } from "./SectionNavProvider";
import MainNavDesktop from "./MainNavDesktop";
import MainNavMobile from "./MainNavMobile";
import SkillsSectionContent from "./SkillsSectionContent";
import ExperienceSectionContent from "./ExperienceSectionContent";
import AboutSectionContent from "./AboutSectionContent";
import { ExternalLink } from "@/components/icons/mono/ExternalLink";
import { Github } from "@/components/icons/mono/Github";
import ContactsNav, { ContactsNavProps } from "./ContactsNav";
import { TelegramFilled } from "@/components/icons/mono/TelegramFilled";
import { LinkedinBold } from "@/components/icons/mono/LinkedinBold";
import { GithubFilled } from "@/components/icons/mono/GithubFilled";
import { EmailFilled } from "@/components/icons/mono/EmailFilled";
import CopyButton from "@/components/common/CopyButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leetcode } from "@/components/icons/mono/Leetcode";
import { ActivitySectionContent } from "./ActivitySectionContent";
import { User } from "@/components/icons/mono/User";
import { Briefcase } from "@/components/icons/mono/Briefcase";
import { Clock } from "@/components/icons/mono/Clock";
import { Star } from "@/components/icons/mono/Star";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const contacts: ContactsNavProps["items"] = [
  {
    Icon: TelegramFilled,
    id: "telegram",
    name: "telegram",
    url: resume.socials.telegram,
  },
  {
    Icon: LinkedinBold,
    id: "linkedin",
    name: "linkedin",
    url: resume.socials.linkedin,
  },
  {
    Icon: GithubFilled,
    id: "github",
    name: "github",
    url: resume.socials.github,
  },
  {
    Icon: Leetcode,
    id: "leetcode",
    name: "leetcode",
    url: resume.socials.leetcode,
  },
  {
    Icon: EmailFilled,
    id: "email",
    name: resume.email,
    url: `mailto:${resume.email}`,
  },
];

const sections: SectionNavSection[] = [
  {
    id: "about",
    name: "About",
    Content: AboutSectionContent,
    Icon: User,
  },
  {
    id: "experience",
    name: "Experience",
    Content: ExperienceSectionContent,
    Icon: Briefcase,
  },
  // {
  //   id: "activity",
  //   name: "Activity",
  //   Content: ActivitySectionContent,
  //   Icon: Clock,
  // },
  {
    id: "skills",
    name: "Skills",
    Content: SkillsSectionContent,
    Icon: Star,
  },
];

const IS_ANIMATION_ENABLED = true;

export const HomePage = () => {
  const [isAnimationPlaying, setIsAnimationPlaying] =
    useState(IS_ANIMATION_ENABLED);

  useGSAP(() => {
    if (!IS_ANIMATION_ENABLED) {
      return;
    }

    const rootTimeline = gsap.timeline({
      delay: 0.2,
      paused: true,
    });

    const primaryItemsTimeline = gsap.timeline({
      paused: true,
    });

    primaryItemsTimeline.fromTo(
      ['[data-gsap-target="title-word"], [data-gsap-target="subtitle-word"]'],
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1.3,
        stagger: 0.3,
      },
    );

    const secondaryItemsTimeline = gsap.timeline({
      paused: true,
    });

    secondaryItemsTimeline.fromTo(
      '[data-gsap-target="secondary"]',
      {
        y: 10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.2,
      },
    );

    rootTimeline
      .to(primaryItemsTimeline, {
        progress: 1,
        duration: primaryItemsTimeline.duration(),
        ease: "power4.out",
      })
      .to(
        secondaryItemsTimeline,
        {
          progress: 1,
          duration: secondaryItemsTimeline.duration(),
          ease: "power4.out",
        },
        "-=1.4",
      );

    const isDesktop = matchMedia("(min-width: 1024px)").matches;

    if (isDesktop) {
      rootTimeline.fromTo(
        '[data-gsap-target="content"]',
        {
          x: 10,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
        },
        "<",
      );
    }

    // for some reason duration of animation is bigger than animation itself
    // so we can't set onComplete directly on timeline
    // that's why we added callback before specified time, until duration ends
    rootTimeline.add(() => {
      setIsAnimationPlaying(false);
    }, "-=1.25");

    rootTimeline.play();
  });

  return (
    <SectionNavProvider sections={sections}>
      <main
        className={clsx("relative lg:grid lg:grid-cols-2", {
          "gsap-hide-items": isAnimationPlaying,
          "h-screen overflow-hidden": isAnimationPlaying,
        })}
      >
        <header
          id="header"
          className={clsx(
            "min-h-screen lg:h-screen items-center flex lg:sticky flex-col lg:top-0",
          )}
        >
          <div
            className={clsx(
              "relative flex flex-1 pb-24 pt-20 px-5 items-start justify-center md:px-10 flex-col gap-12 max-w-[600px] sm:gap-8 lg:pb-16 lg:pt-36 lg:justify-between lg:ml-auto",
            )}
          >
            <div className="relative flex flex-col items-start">
              {/* making it absolute to not depend on height of this element
              for calc top padding of the right content on large devices */}
              {resume.isAvailableForHire && (
                <div className="absolute flex gap-4 items-center left-0 -translate-y-full pb-3.5">
                  <span
                    data-gsap-target="secondary"
                    className="gsap-item rounded-full inline-flex font-mono gap-1.5 select-none items-center border text-success border-success px-2.5 py-1 min-h-7 text-xs"
                  >
                    <span className="relative flex text-success h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                      <span className="relative inline-flex rounded-full w-full h-full bg-current"></span>
                    </span>
                    available for hire
                  </span>
                </div>
              )}

              <div className="mb-1 sm:mb-2">
                <h1 className="overflow-hidden relative uppercase font-bold text-2xl sm:text-4xl tracking-wider">
                  {[resume.firstName, resume.lastName].map((word, i, items) => {
                    const isLast = i === items.length - 1;

                    return (
                      <span
                        data-gsap-target="title-word"
                        key={word}
                        className="gsap-item inline-block whitespace-pre"
                      >
                        {word}
                        {!isLast && " "}
                      </span>
                    );
                  })}
                </h1>
              </div>

              <div className="mb-4 overflow-hidden sm:mb-6">
                <p className="overflow-hidden relative text-lg sm:text-2xl">
                  {resume.position.split(" ").map((word, i, items) => {
                    const isLast = i === items.length - 1;

                    return (
                      <span
                        data-gsap-target="subtitle-word"
                        key={word}
                        className="gsap-item inline-block whitespace-pre"
                      >
                        {word}
                        {!isLast && " "}
                      </span>
                    );
                  })}
                </p>
              </div>

              <div className="mb-6">
                <p
                  data-gsap-target="secondary"
                  className="gsap-item leading-[1.75] text-text-secondary font-light text-balance"
                  dangerouslySetInnerHTML={{ __html: resume.shortDescription }}
                />
              </div>

              <div className="flex items-start flex-col gap-y-4 gap-x-8">
                <ContactsNav
                  className="gsap-item"
                  data-gsap-target="secondary"
                  aria-label="Contacts"
                  items={contacts}
                />

                <CopyButton
                  className="gsap-item"
                  data-gsap-target="secondary"
                  value={resume.email}
                />
              </div>
            </div>

            <div className="max-lg:hidden my-auto">
              <MainNavDesktop
                className="gsap-item"
                data-gsap-target="secondary"
              />
            </div>

            <div className="gsap-item" data-gsap-target="secondary">
              <a
                target="_blank"
                href={resume.resumeUrl}
                className="btn btn-text-md btn-link-primary"
              >
                View Resume to Learn More
                <ExternalLink className="btn-s-icon" />
              </a>
            </div>
          </div>
        </header>

        <div
          data-gsap-target="content"
          className="gsap-item bg-bg-secondary relative items-center flex flex-col rounded-t-xl lg:rounded-l-xl"
        >
          <div className="max-lg:hidden sticky top-0 pointer-events-none w-full h-0">
            <div className="h-[8.5rem] bg-gradient-to-t from-transparent to-bg-secondary" />
          </div>

          <div className="pb-24 max-w-[600px] lg:mr-auto lg:pb-16 px-5 md:px-10">
            <HomePageSections sectionClassName="pt-20 lg:pt-36" />

            <footer className="mt-20 relative z-[1] flex items-center lg:items-end flex-col gap-12">
              <div className="lg:hidden flex flex-col gap-4 items-center">
                <ContactsNav aria-label="Contacts" items={contacts} />
                <CopyButton value={resume.email} />
              </div>

              <a
                target="_blank"
                className="btn btn-text-md btn-link-secondary"
                href="https://github.com/alexaganov/portfolio-website"
              >
                View Source Code
                <Github className="btn-s-icon" />
              </a>
            </footer>
          </div>

          <div className="max-lg:hidden sticky bottom-0 pointer-events-none w-full h-0">
            <div className="h-16 -translate-y-full bg-gradient-to-b from-transparent to-bg-secondary" />
          </div>
        </div>
      </main>

      <div className="fixed z-10 bottom-0 w-full h-24 flex items-center lg:hidden">
        <div className="absolute w-full h-full left-0 z-0 top-0 bg-gradient-to-b from-transparent to-bg-primary" />
        <MainNavMobile
          data-gsap-target="secondary"
          className="relative gsap-item w-full max-w-[600px] px-5 md:px-10 mx-auto"
        />
      </div>
    </SectionNavProvider>
  );
};

export default HomePage;
