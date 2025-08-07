import Image from "next/image";
import React from "react";
import ArrowIcon from "./ArrowIcon";

interface StoryCardProps {
  image: string;
  name: string;
  artist: string;
}

export default function StoryCard({ image, name, artist }: StoryCardProps) {
  return (
    <div className="h-full flex-1 relative z-60">
      <div className="absolute h-full w-full bottom-0 transition-all duration-300 ease-in-out left-0 hover:bottom-8 hover:border-b-8 border-b-transparent bg-gradient-to-r from-purple-500 to-violet-500 cursor-pointer">
        <Image
          src={image}
          alt="story-card"
          fill
          className="object-cover z-80"
        ></Image>
        <div className="w-full absolute h-full z-70 bg-white"></div>
        <div className="w-full absolute h-full z-90 bg-black opacity-20 pointer-events-none"></div>

        <div className="h-fit w-[90%] p-4 py-8 text-white  left-1/2 -translate-x-1/2 z-100 mx-auto absolute bottom-0 flex flex-col justify-center gap-3">
          <div>
            <h2 className="font-bold text-lg">{name}</h2>
            <p className="text-sm">By {artist}</p>
          </div>
          <hr className="w-full border-t-1 border-white/30"></hr>
          <button className="cursor-pointer flex items-center justify-between">
            <p className="font-bold text-[0.7rem] tracking-widest">
              READ STORY
            </p>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
