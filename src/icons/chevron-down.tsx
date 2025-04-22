import * as React from 'react';

function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={17} fill="none" {...props}>
      <path
        d="M12.667 6.294l-4.667 4-4.667-4"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChevronDown;
