import React, { ReactNode } from "react";
import Image from "next/image";
import ArrowIcon from "./ArrowIcon";

interface TemplateProps {
  children: ReactNode;
  className?: string;
  height?: number;
  flexDirection?: "flex-row-reverse" | "flex-row";
  image: string;
  buttonName: string;
}

export default function Template({
  className = "bg-black text-white",
  height = 65,
  children,
  flexDirection = "flex-row",
  image,
  buttonName,
}: TemplateProps) {
  return (
    <section
      style={{ minHeight: `${height}vh` }}
      className={`flex ${flexDirection} w-full`}
    >
      <div
        className={`${className}  w-[40%] p-4 md:p-8 min-h-full  flex items-center justify-center`}
      >
        <div className="w-[80%] flex flex-col gap-4">
          {children}
          <button className="cursor-pointer flex items-center gap-3 hover:underline w-fit uppercase text-sm font-bold tracking-wider">
            <p>{buttonName}</p>
            <ArrowIcon />
          </button>
        </div>
      </div>
      <div className="flex-1 min-h-full relative z-50">
        <Image src={image} alt="hero" fill className="object-cover"></Image>
      </div>
    </section>
  );
}
