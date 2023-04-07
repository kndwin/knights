import { type SVGAttributes } from "react";

export const SpraySVG = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={1440} height={749} {...props}>
    <defs>
      <linearGradient x1="100%" y1="37.276%" x2="9.488%" y2="37.276%" id="a">
        <stop stopColor="#6366F1" offset="0%" />
        <stop stopColor="#6366F1" stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient x1="100%" y1="37.276%" x2="9.488%" y2="37.276%" id="c">
        <stop stopColor="#14B8A6" offset="0%" />
        <stop stopColor="#14B8A6" stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient x1="9.488%" y1="37.276%" x2="100%" y2="37.276%" id="e">
        <stop stopColor="#0EA5E9" offset="0%" />
        <stop stopColor="#0EA5E9" stopOpacity={0} offset="100%" />
      </linearGradient>
      <filter
        x="-23.7%"
        y="-185.4%"
        width="147.3%"
        height="470.7%"
        filterUnits="objectBoundingBox"
        id="b"
      >
        <feGaussianBlur stdDeviation={50} in="SourceGraphic" />
      </filter>
      <filter
        x="-23.7%"
        y="-185.4%"
        width="147.3%"
        height="470.7%"
        filterUnits="objectBoundingBox"
        id="d"
      >
        <feGaussianBlur stdDeviation={50} in="SourceGraphic" />
      </filter>
      <filter
        x="-23.7%"
        y="-185.4%"
        width="147.3%"
        height="470.7%"
        filterUnits="objectBoundingBox"
        id="f"
      >
        <feGaussianBlur stdDeviation={50} in="SourceGraphic" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd" opacity={0.8}>
      <path
        fill="url(#a)"
        filter="url(#b)"
        transform="rotate(-20 199.62 93.344)"
        d="M221.284 106.384 185.95 185.7l598.833 1.605 35.334-79.316z"
      />
      <path
        fill="url(#c)"
        filter="url(#d)"
        transform="rotate(-20 548.62 102.27)"
        d="m570.284 115.309-35.334 79.316 598.833 1.605 35.334-79.316z"
      />
      <path
        fill="url(#e)"
        filter="url(#f)"
        transform="rotate(-20 577.62 547.528)"
        d="m599.284 560.567-35.334 79.316 598.833 1.605 35.334-79.316z"
      />
    </g>
  </svg>
);
