import Button from "@/src/components/Button";
import FeatureTemplate from "@/src/components/FeatureTemplate";
import Template from "@/src/components/Template";
import { features } from "@/src/data/data";
import { type FeatureType } from "@/src/types";
import { url } from "inspector";
import React from "react";

export default function page() {
  return (
    <main className="h-full">
      <Template height={45} image="/assets/features/desktop/hero.jpg">
        <h1 className="text-4xl md:text-5xl uppercase tetx-white font-bold">
          Features
        </h1>
        <p className="text-zinc-400 text-md">
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </p>
      </Template>

      <section className="grid grid-rows-[repeat(2,_45vh)] grid-cols-3 w-full">
        {features.map((feature: FeatureType, index: number) => (
          <FeatureTemplate
            key={index}
            heading={feature.title}
            description={feature.desc}
            image={feature.iconName}
          />
        ))}
      </section>

      <section
        style={{
          backgroundImage: `url("/assets/shared/desktop/bg-beta.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-[30vh]"
      >
        <div className="w-[80%] h-full text-white flex mx-auto items-center justify-between">
          <h1 className="text-4xl uppercase text-white max-w-[400px] tracking-widest font-bold">
            We're in beta. Get your invite today!
          </h1>

          <Button buttonName="get an invite" />
        </div>
      </section>
    </main>
  );
}
