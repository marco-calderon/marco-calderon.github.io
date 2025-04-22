import * as React from 'react';

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={34} height={30} fill="none" {...props}>
      <path
        d="M.462.313h7.666l5.273 12.85h.266L18.94.313h7.666V23H20.58V9.884h-.178l-5.051 12.939h-3.634L6.666 9.795h-.177V23H.462V.313z"
        fill="#fff"
      />
      <foreignObject x={19.384} y={15.015} width={14.432} height={14.622}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: 'blur(1.39px)',
            height: '100%',
            width: '100%',
          }}
          clipPath="url(#prefix__bgblur_0_1_2_clip_path)"
        />
      </foreignObject>
      <g filter="url(#prefix__filter0_d_1_2)" data-figma-bg-blur-radius={2.773}>
        <circle
          cx={26.6}
          cy={22.188}
          r={4.4}
          fill="url(#prefix__paint0_linear_1_2)"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear_1_2"
          x1={28.89}
          y1={20.527}
          x2={23.996}
          y2={25.645}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2C80FF" />
          <stop offset={1} stopColor="#6C46EA" stopOpacity={0.5} />
        </linearGradient>
        <clipPath
          id="prefix__bgblur_0_1_2_clip_path"
          transform="translate(-19.384 -15.015)"
        >
          <circle cx={26.6} cy={22.188} r={4.4} />
        </clipPath>
        <filter
          id="prefix__filter0_d_1_2"
          x={19.384}
          y={15.015}
          width={14.432}
          height={14.622}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={0.233} />
          <feGaussianBlur stdDeviation={1.408} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.424575 0 0 0 0 0.27451 0 0 0 0 0.917647 0 0 0 0.5 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_2"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default Logo;
