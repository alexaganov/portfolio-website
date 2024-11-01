export const scrollToElement = (
  element: Element,
  { topOffset = 0, ...options }: { topOffset?: number } & Pick<ScrollToOptions, 'behavior'> = {},
) => {
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - topOffset;

  window.scrollTo({
    top: offsetPosition,
    ...options,
  });
};

export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= -1 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};