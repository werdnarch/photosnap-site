import Button from "@/src/components/Button";
import StoryCard from "@/src/components/StoryCard";
import { stories } from "@/src/data/data";
import { type StoryType } from "@/src/types";
import React from "react";

export default function page() {
  return (
    <main className="h-full">
      <section
        style={{
          backgroundImage: `url("/assets/stories/desktop/moon-of-appalacia.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-[60vh] w-full"
      >
        <div className="h-full w-full p-20 max-w-[500px] text-white flex flex-col  justify-center gap-8">
          <h3 className="uppercase text-sm font-bold tracking-widest">
            Last month's featured story
          </h3>

          <h1 className="uppercase text-4xl font-bold tracking-widest">
            Hazy full moon of Appalachia
          </h1>

          <p className="text-sm ">
            <span className="text-zinc-300">March 2nd 2020</span> by John
            Appleseed
          </p>

          <p className="text-[0.9rem] text-zinc-400">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>

          <Button buttonName="Read the story" />
        </div>
      </section>

      <section className="w-full grid grid-rows-[repeat(4,_50vh)] grid-cols-4">
        {stories.map((story: StoryType, index: number) => (
          <StoryCard
            key={index}
            date={story.datetime}
            name={story.title}
            artist={story.author}
            image={story.image.link}
            btn={story.btn.to}
          />
        ))}
      </section>
    </main>
  );
}
