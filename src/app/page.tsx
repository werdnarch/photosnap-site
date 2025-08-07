import React from "react";
import ArrowIcon from "../components/ArrowIcon";
import Image from "next/image";
import Template from "../components/Template";
import StoryCard from "../components/StoryCard";
import FeatureTemplate from "../components/FeatureTemplate";
import ResponsiveSvg from "../components/ResponsiveSvg";
import LimitSVG from "../components/LimitSVG";
import EmbedSVG from "../components/EmbedSVG";

export default function page() {
  return (
    <main>
      <Template
        buttonName="Get an invite"
        image="/assets/home/desktop/create-and-share.jpg"
      >
        <h1 className="text-4xl md:text-5xl uppercase text-white font-bold">
          Create and share your photo stories.
        </h1>
        <p className="text-zinc-400 text-md">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories, and connect with others.
        </p>
      </Template>

      <Template
        buttonName="view the stories"
        className="bg-white text-black"
        image="/assets/home/desktop/beautiful-stories.jpg"
        height={55}
        flexDirection="flex-row-reverse"
      >
        <h1 className="text-4xl md:text-5xl uppercase text-black font-bold">
          Beautiful stories every time
        </h1>
        <p className="text-zinc-400 text-md">
          We provide design and development teams with a simple way to access,
          manage and share design tokens
        </p>
      </Template>

      <Template
        buttonName="view the stories"
        className="bg-white text-black"
        image="/assets/home/desktop/designed-for-everyone.jpg"
        height={55}
      >
        <h1 className="text-4xl md:text-5xl uppercase text-black font-bold">
          Designed for everyone
        </h1>
        <p className="text-zinc-400 text-md">
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </p>
      </Template>
      <div className="w-full h-[50vh] flex items-center">
        <StoryCard
          image="/assets/stories/desktop/mountains.jpg"
          name="The Mountains"
          artist="John Appleseed"
        />
        <StoryCard
          image="/assets/stories/desktop/cityscapes.jpg"
          name="Sunset Cityscapes"
          artist="Benjamin Cruz"
        />
        <StoryCard
          image="/assets/stories/desktop/18-days-voyage.jpg"
          name="18 Days Voyage"
          artist="Alexei Borodin"
        />
        <StoryCard
          image="/assets/stories/desktop/architecturals.jpg"
          name="Architecturals"
          artist="Samantha Brooke"
        />
      </div>
      <div className="w-full h-[50vh] bg-white flex items-center justify-center gap-4">
        <FeatureTemplate
          image={<ResponsiveSvg />}
          heading="100% Responsive"
          description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
        />
        <FeatureTemplate
          image={<LimitSVG />}
          heading="No Photo Upload Limit"
          description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go"
        />
        <FeatureTemplate
          image={<EmbedSVG />}
          heading="Available to Embed"
          description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
        />
      </div>
    </main>
  );
}
