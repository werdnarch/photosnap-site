import React from "react";
import ArrowIcon from "./ArrowIcon";
export default function Button({ buttonName }: { buttonName: string }) {
  return (
    <button className="cursor-pointer flex items-center gap-3 hover:underline w-fit uppercase text-sm font-bold tracking-wider">
      <p>{buttonName}</p>
      <ArrowIcon />
    </button>
  );
}
