import React from "react";

export default function TickIcon({ width = 18 }: { width?: number }) {
  const height = (15 / 18) * width;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 15"
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth="2"
        d="M1 8.124L5.623 13 17 1"
      />
    </svg>
  );
}
