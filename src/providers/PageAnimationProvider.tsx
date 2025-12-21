'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type ReactNode, useMemo, useState } from 'react';

import { createSafeContext, useSafeContext } from '@/utils/context';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

type ContextValue = {
  isPlaying: boolean;
};

const Context = createSafeContext<ContextValue>();

Context.displayName = 'PageAnimationContext';

type PageAnimationProviderProps = {
  children?: ReactNode;
};

// TODO: move in envs
const IS_ANIMATION_DISABLED = false;

export const usePageAnimation = () => useSafeContext(Context);

export const PageAnimationProvider = ({ children }: PageAnimationProviderProps) => {
  // TODO: add states for all available pages
  const [isPlaying, setIsPlaying] = useState(IS_ANIMATION_DISABLED);

  useGSAP(() => {
    if (IS_ANIMATION_DISABLED) {
      return;
    }

    const primaryContentTimeline = gsap.timeline({
      paused: true,
    });

    primaryContentTimeline.fromTo(
      ['[data-gsap-target="title-word"], [data-gsap-target="subtitle-word"]'],
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
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

    const rootTimeline = gsap.timeline({
      delay: 0.2,
      paused: true,
    });

    rootTimeline
      .to(primaryContentTimeline, {
        progress: 1,
        duration: primaryContentTimeline.duration(),
        ease: 'power4.out',
      })
      .to(
        secondaryItemsTimeline,
        {
          progress: 1,
          duration: secondaryItemsTimeline.duration(),
          ease: 'power4.out',
        },
        '-=1.4',
      );

    const isDesktop = matchMedia('(min-width: 1024px)').matches;

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
          ease: 'power4.out',
        },
        '<',
      );
    }

    // for some reason duration of animation is bigger than animation itself
    // so we can't set onComplete directly on timeline
    // that's why we added callback before specified time, until duration ends
    rootTimeline.add(() => {
      setIsPlaying(false);
    }, '-=1.25');

    rootTimeline.play();
  });

  const value: ContextValue = useMemo(() => {
    return {
      isPlaying,
    };
  }, [isPlaying]);

  return <Context value={value}>{children}</Context>;
};
