import React from "react";

interface FeatureTemplateProps {
  image: string | React.ReactNode;
  heading: string;
  description: string;
}

export default function FeatureTemplate({
  image,
  heading,
  description,
}: FeatureTemplateProps) {
  return (
    <div className="flex-1 h-full text-black flex flex-col gap-12 items-center justify-center max-w-[500px]">
      {image}

      <div className="w-full flex flex-col items-center text-center max-w-[350px] gap-4">
        <h3 className="text-lg font-bold">{heading}</h3>

        <p className="">{description}</p>
      </div>
    </div>
  );
}
