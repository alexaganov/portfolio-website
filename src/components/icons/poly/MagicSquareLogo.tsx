import { SVGProps, useId } from "react";

export const MagicSquareLogo = (props: SVGProps<SVGSVGElement>) => {
  const id = useId();
  const gradientIds = Array.from({ length: 5 }, (_, i) => `${id}-${i}`);

  return (
    <svg viewBox="0 0 32 32" {...props}>
      <path
        d="M0.982196 18.3712C-0.327399 17.0616 -0.327399 14.9384 0.982196 13.6288L3.35343 11.2575L5.72466 13.6288C7.03426 14.9384 7.03426 17.0616 5.72466 18.3712C4.41507 19.6808 2.29179 19.6808 0.982196 18.3712Z"
        fill={`url(#${gradientIds[0]})`}
      />
      <path
        d="M7.30548 24.6945C5.99589 23.3849 5.99589 21.2616 7.30548 19.9521L9.67671 17.5808L18.3712 26.2753C19.6808 27.5849 19.6808 29.7082 18.3712 31.0178C17.0616 32.3274 14.9384 32.3274 13.6288 31.0178L7.30548 24.6945Z"
        fill={`url(#${gradientIds[1]})`}
      />
      <path
        d="M9.67671 4.93425L4.93425 9.67671L22.3233 27.0658L27.0658 22.3233L9.67671 4.93425Z"
        fill={`url(#${gradientIds[2]})`}
      />
      <path
        d="M13.6288 5.72466C12.3192 4.41507 12.3192 2.29179 13.6288 0.982197C14.9384 -0.327399 17.0616 -0.327399 18.3712 0.982197L24.6945 7.30548C26.0041 8.61508 26.0041 10.7383 24.6945 12.0479L22.3233 14.4192L13.6288 5.72466Z"
        fill={`url(#${gradientIds[3]})`}
      />
      <path
        d="M26.2753 13.6288C24.9657 14.9384 24.9657 17.0616 26.2753 18.3712L28.6466 20.7425L31.0178 18.3712C32.3274 17.0616 32.3274 14.9384 31.0178 13.6288C29.7082 12.3192 27.5849 12.3192 26.2753 13.6288Z"
        fill={`url(#${gradientIds[4]})`}
      />
      <defs>
        <linearGradient
          id={gradientIds[0]}
          x1="24"
          y1="4.5597e-08"
          x2="15.7362"
          y2="31.9317"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8066" />
          <stop offset="0.5" stopColor="#E666FF" />
          <stop offset="1" stopColor="#66B3FF" />
        </linearGradient>
        <linearGradient
          id={gradientIds[1]}
          x1="24"
          y1="4.5597e-08"
          x2="15.7362"
          y2="31.9317"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8066" />
          <stop offset="0.5" stopColor="#E666FF" />
          <stop offset="1" stopColor="#66B3FF" />
        </linearGradient>
        <linearGradient
          id={gradientIds[2]}
          x1="24"
          y1="4.5597e-08"
          x2="15.7362"
          y2="31.9317"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8066" />
          <stop offset="0.5" stopColor="#E666FF" />
          <stop offset="1" stopColor="#66B3FF" />
        </linearGradient>
        <linearGradient
          id={gradientIds[3]}
          x1="24"
          y1="4.5597e-08"
          x2="15.7362"
          y2="31.9317"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8066" />
          <stop offset="0.5" stopColor="#E666FF" />
          <stop offset="1" stopColor="#66B3FF" />
        </linearGradient>
        <linearGradient
          id={gradientIds[4]}
          x1="24"
          y1="4.5597e-08"
          x2="15.7362"
          y2="31.9317"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8066" />
          <stop offset="0.5" stopColor="#E666FF" />
          <stop offset="1" stopColor="#66B3FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
