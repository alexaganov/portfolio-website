import React, { SVGProps } from 'react'

export const Check = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M17.1427 5.72168L7.97599 14.8883L3.80933 10.7217"
        stroke="currentcolor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}