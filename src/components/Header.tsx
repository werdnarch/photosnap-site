import React from "react";
import LogoIcon from "./LogoIcon";
import Link from "next/link";

export function Header({}) {
  return (
    <header className="h-[10%] flex items-center justify-evenly sticky top-0 min-h-[80px] max-h-[100px] w-full bg-white  max-w-[1400px] z-100">
      <Link href={"/"}>
        <LogoIcon />
      </Link>

      <nav className="w-[30%]">
        <ul className="flex items-center gap-4 justify-evenly">
          <li className="uppercase text-black text-[0.8rem] tracking-widest hover:text-zinc-500 transition-all duration-150 ease-in-out font-semibold">
            <Link href={"/stories"}>Stories</Link>
          </li>
          <li className="uppercase text-black text-[0.8rem] tracking-widest hover:text-zinc-500 transition-all duration-150 ease-in-out font-semibold">
            <Link href={"/features"}>features</Link>
          </li>
          <li className="uppercase text-black text-[0.8rem] tracking-widest hover:text-zinc-500 transition-all duration-150 ease-in-out font-semibold">
            <Link href={"/pricing"}>pricing</Link>
          </li>
        </ul>
      </nav>

      <button className="p-2 uppercase text-[0.7rem] px-8 text-white bg-black hover:bg-zinc-300 hover:text-black transition-all duration-500 ease-in-out cursor-pointer tracking-widest">
        <p>Get an Invite</p>
      </button>
    </header>
  );
}
