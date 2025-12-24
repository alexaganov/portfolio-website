import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

type Edges = { top: number; bottom: number };

type UseSlinkyNavIndicatorOptions = {
  /** Push the indicator down/up relative to the link (px). */
  topOffset?: number;
  /**
   * Adjust the indicator height relative to the link (px).
   * Negative = shorter, Positive = taller.
   */
  heightOffset?: number;
  /** Minimum indicator height (px). */
  minHeight?: number;
  /** Animation durations (seconds). */
  durationHit?: number; // edge "hits" first
  durationFollow?: number; // opposite edge follows
};

const getEdgesWithin = (
  element: HTMLElement,
  container: HTMLElement,
  options: Required<Pick<UseSlinkyNavIndicatorOptions, 'topOffset' | 'heightOffset'>>,
): Edges => {
  const r = element.getBoundingClientRect();
  const c = container.getBoundingClientRect();

  const rawTop = r.top - c.top;
  const rawBottom = r.bottom - c.top;

  const top = rawTop + options.topOffset;
  const bottom = rawBottom + options.topOffset + options.heightOffset;

  return { top, bottom };
};

const applyIndicator = (indicator: HTMLElement, edges: Edges, minHeight: number) => {
  const height = Math.max(minHeight, edges.bottom - edges.top);
  gsap.set(indicator, { top: edges.top, height });
};

export const useSlinkyNavIndicator = (
  activeItemSelector: string | null,
  options: UseSlinkyNavIndicatorOptions = {},
) => {
  const navRef = useRef<HTMLElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  const edgesRef = useRef<Edges>({ top: 0, bottom: 0 });
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const initializedRef = useRef(false);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;

    if (!nav || !indicator || !activeItemSelector) {
      return;
    }

    const target = nav.querySelector<HTMLElement>(activeItemSelector);
    if (!target) {
      return;
    }

    const opts = {
      topOffset: options.topOffset ?? 0,
      heightOffset: options.heightOffset ?? 0,
    };

    const minHeight = options.minHeight ?? 1;
    const durationHit = options.durationHit ?? 0.22;
    const durationFollow = options.durationFollow ?? 0.32;

    const targetEdges = getEdgesWithin(target, nav, opts);

    // First layout: snap into place (no animation) to avoid flicker.
    if (!initializedRef.current) {
      edgesRef.current = targetEdges;
      applyIndicator(indicator, targetEdges, minHeight);
      initializedRef.current = true;
      return;
    }

    const current = edgesRef.current;
    const goingDown = targetEdges.top > current.top;

    // 2-phase “hit then follow”
    // moving down: bottom hits first, then top follows
    // moving up: top hits first, then bottom follows
    const firstEdge: keyof Edges = goingDown ? 'bottom' : 'top';
    const secondEdge: keyof Edges = goingDown ? 'top' : 'bottom';

    tlRef.current?.kill();

    const tl = gsap.timeline({
      defaults: { overwrite: 'auto' },
      onUpdate: () => applyIndicator(indicator, edgesRef.current, minHeight),
    });

    tlRef.current = tl;

    tl.to(edgesRef.current, {
      [firstEdge]: targetEdges[firstEdge],
      duration: durationHit,
      ease: 'power3.out',
    });

    tl.to(edgesRef.current, {
      [secondEdge]: targetEdges[secondEdge],
      duration: durationFollow,
      ease: 'power3.out',
    });

    tl.eventCallback('onComplete', () => {
      edgesRef.current = targetEdges;
      applyIndicator(indicator, targetEdges, minHeight);
    });

    return () => {
      tl.kill();
    };
  }, [
    activeItemSelector,
    options.topOffset,
    options.heightOffset,
    options.minHeight,
    options.durationHit,
    options.durationFollow,
  ]);

  return { navRef, indicatorRef };
};
