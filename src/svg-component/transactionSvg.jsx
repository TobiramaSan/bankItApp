import React from "react";

const TransactionSvg = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M11.6772 1.47269C11.9652 0.676026 11.1932 -0.0959737 10.3965 0.192693L0.659869 3.71403C-0.139464 4.00336 -0.236131 5.09403 0.499202 5.52003L3.6072 7.31936L6.38254 4.54403C6.50827 4.42259 6.67667 4.35539 6.85147 4.35691C7.02627 4.35843 7.19348 4.42854 7.31708 4.55215C7.44069 4.67575 7.5108 4.84296 7.51232 5.01776C7.51384 5.19256 7.44664 5.36096 7.3252 5.48669L4.54987 8.26203L6.34987 11.37C6.7752 12.1054 7.86587 12.008 8.1552 11.2094L11.6772 1.47269Z"
        fill={color}
      />
    </svg>
  );
};

export default TransactionSvg;
