import React, { type SVGProps } from 'react';
export const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M5.8335 14.1666L14.1668 5.83331"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.8335 5.83331H14.1668V14.1666"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
