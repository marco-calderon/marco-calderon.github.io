import * as React from 'react';

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 413 247" fill="none" {...props}>
      <path
        fill="#fff"
        d="M0 81.996h81.996v83.008H0zM165.004 81.996H247v83.008h-81.996zM165.004 165.004H247V247h-81.996z"
      />
      <path
        fill="#D9D9D9"
        d="M247 165.004h81.996V247H247zM247 0h81.996v81.996H247z"
      />
      <path
        fill="#fff"
        d="M165.004 81.996H247v83.008h-81.996zM0 165.004h81.996V247H0zM165.004 165.004H247V247h-81.996zM81.996 0v81.996H0L81.996 0zM247 0v81.996h-81.996L247 0z"
      />
      <path
        d="M247 0v81.996h-81.996L247 0zM165.004 81.996v83.008H81.996l83.008-83.008z"
        fill="#fff"
      />
      <path
        d="M328.996 81.996V0h83.008l-83.008 81.996zM328.996 247v-81.996h83.008L328.996 247z"
        fill="#D9D9D9"
      />
    </svg>
  );
}

const LogoIcon = React.memo(Logo);
export default LogoIcon;
