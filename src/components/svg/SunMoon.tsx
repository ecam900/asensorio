import type { FC } from 'react';
import React from 'react';

type Props = {};

const SunMoon: FC<Props> = () => {
  return (
    <svg
      className="absolute right-[5%] top-[10%] -z-10 h-[20vh] w-[20vh]"
      viewBox="0 0 242 244"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="121"
        cy="122"
        rx="121"
        ry="122"
        fill="url(#paint0_linear_10_14219)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_10_14219"
          x1="121"
          y1="0"
          x2="121"
          y2="244"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EBDD61" />
          <stop offset="1" stopColor="#D327A3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SunMoon;
