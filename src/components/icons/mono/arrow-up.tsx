import React, { type SVGProps } from 'react';
export const ArrowUp = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      strokeWidth="2"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path d="M10 15.8332V4.1665" />
      <path d="M4.1665 9.99984L9.99984 4.1665L15.8332 9.99984" />
    </svg>
  );
};
