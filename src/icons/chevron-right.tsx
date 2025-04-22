import * as React from 'react';

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path
        d="M6 3.333L10 8l-4 4.667"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChevronRight;
