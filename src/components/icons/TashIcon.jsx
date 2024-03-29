import React from "react";

export const TrashIcon = React.forwardRef((props, ref) => (
  <svg
    ref={ref}
    {...props}
    viewBox="0 0 18 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Delete</title>
    <path
      d="M1.5 20.75C1.5 22.125 2.625 23.25 4 23.25H14C15.375 23.25 16.5 22.125 16.5 20.75V5.75H1.5V20.75ZM4.575 11.85L6.3375 10.0875L9 12.7375L11.65 10.0875L13.4125 11.85L10.7625 14.5L13.4125 17.15L11.65 18.9125L9 16.2625L6.35 18.9125L4.5875 17.15L7.2375 14.5L4.575 11.85ZM13.375 2L12.125 0.75H5.875L4.625 2H0.25V4.5H17.75V2H13.375Z"
      fill="white"
    />
  </svg>
));
