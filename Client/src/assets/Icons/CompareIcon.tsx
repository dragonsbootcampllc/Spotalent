// components/icons/CompareIcon.jsx

import React from "react";

const CompareIcon = ({ color = "currentColor", size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10.0132 12.6667H0.666504V15.3334H10.0132V19.3334L15.3332 14L10.0132 8.66669V12.6667ZM17.9865 11.3334V7.33335H27.3332V4.66669H17.9865V0.666687L12.6665 6.00002L17.9865 11.3334Z"
      fill={color}
    />
  </svg>
);

export default CompareIcon;
