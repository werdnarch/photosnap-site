import Image from "next/image";
import React from "react";
import ArrowIcon from "./ArrowIcon";
import Link from "next/link";

type ImageLinks = {
  desktop: string;

  mobile: string;
};

interface StoryCardProps {
  image: string | ImageLinks;
  name: string;
  artist: string;
  date?: string;
  btn?: string;
}

export default function StoryCard({
  image,
  date,
  name,
  artist,
  btn,
}: StoryCardProps) {
  return (
    <div className="h-full flex-1 relative z-60">
      <div className="absolute h-full w-full bottom-0 transition-all duration-300 ease-in-out left-0 hover:bottom-8 hover:border-b-8 border-b-transparent bg-gradient-to-r from-purple-500 to-violet-500 cursor-pointer">
        {typeof image === "string" && (
          <Image
            src={image}
            alt="story-card"
            fill
            className="object-cover z-80"
          ></Image>
        )}

        {typeof image === "object" && (
          <>
            <Image
              src={image.desktop}
              alt="story-card"
              fill
              className="object-cover z-80 hidden md:block"
            ></Image>
            <Image
              src={image.mobile}
              alt="story-card"
              fill
              className="object-cover z-80 block md:hidden"
            ></Image>
          </>
        )}

        <div className="w-full absolute h-full z-70 bg-white"></div>
        <div className="w-full absolute h-full z-90 bg-black opacity-20 pointer-events-none"></div>

        <div className="h-fit w-[90%] p-4 py-8 text-white  left-1/2 -translate-x-1/2 z-100 mx-auto absolute bottom-0 flex flex-col justify-center gap-3">
          <div>
            {date && <p className="text-[0.8rem]">{date}</p>}
            <h2 className="font-bold text-lg">{name}</h2>
            <p className="text-sm">By {artist}</p>
          </div>
          <hr className="w-full border-t-1 border-white/30"></hr>

          {btn ? (
            <Link href={btn}>
              <button className="cursor-pointer flex items-center justify-between">
                <p className="font-bold text-[0.7rem] tracking-widest">
                  READ STORY
                </p>
                <ArrowIcon />
              </button>
            </Link>
          ) : (
            <button className="cursor-pointer flex items-center justify-between">
              <p className="font-bold text-[0.7rem] tracking-widest">
                READ STORY
              </p>
              <ArrowIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
