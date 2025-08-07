import React from "react";
import Button from "./Button";
import LogoIcon from "./LogoIcon";
import FBIcon from "./FBIcon";
import TwitterIcon from "./TwitterIcon";
import YoutubeIcon from "./YoutubeIcon";
import PinterestIcon from "./PinterestIcon";
import InstagramIcon from "./InstagramIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{ minHeight: `20vh` }}
      className="w-full p-4 h-[20vh] md:p-8 lg:p-10 bg-black text-white"
    >
      <section className="w-full h-full mx-auto max-w-[1000px] flex items-center justify-between">
        <div className="h-full flex items-center gap-8 justify-between w-[40%]">
          <div className="h-full text-white flex flex-col justify-between">
            <LogoIcon />
            <div className="flex items-center gap-2 w-full justify-between">
              <FBIcon />
              <YoutubeIcon />
              <TwitterIcon />
              <PinterestIcon />
              <InstagramIcon />
            </div>
          </div>
          <div className="h-full flex flex-col justify-between">
            <Link
              href={"/"}
              className="text-[0.8rem] uppercase tracking-widest font-bold hover:text-zinc-600 transition-colors duration-200 ease-in-out"
            >
              <p>Home</p>
            </Link>
            <Link
              href={"/stories"}
              className="text-[0.8rem] uppercase tracking-widest font-bold hover:text-zinc-600 transition-colors duration-200 ease-in-out"
            >
              <p>stories</p>
            </Link>
            <Link
              href={"/features"}
              className="text-[0.8rem] uppercase tracking-widest font-bold hover:text-zinc-600 transition-colors duration-200 ease-in-out"
            >
              <p>features</p>
            </Link>
            <Link
              href={"/pricing"}
              className="text-[0.8rem] uppercase tracking-widest font-bold hover:text-zinc-600 transition-colors duration-200 ease-in-out"
            >
              <p>pricing</p>
            </Link>
          </div>
        </div>

        <div className="h-full flex flex-col justify-between items-end">
          <Button buttonName="Get an invite" />

          <p className="text-zinc-400">Copyright 2025. All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
}
