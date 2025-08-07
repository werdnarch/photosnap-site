import Beta from "@/src/components/Beta";
import PricingSection from "@/src/components/PricingSection";
import Template from "@/src/components/Template";
import React from "react";

export default function page() {
  return (
    <main className="h-full">
      <Template image="/assets/pricing/desktop/hero.jpg" height={50}>
        <h1 className="text-4xl tracking-wider uppercase tetx-white font-bold">
          Pricing
        </h1>
        <p className="text-zinc-400 text-md">
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </p>
      </Template>

      <section className="w-full lg:p-[5rem]">
        <PricingSection />
      </section>
      <Beta />
    </main>
  );
}
