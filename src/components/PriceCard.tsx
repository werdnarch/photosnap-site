import React from "react";
import { type PlanType } from "../types";

type CardProps = Omit<PlanType, "frequency"> & { price: "Monthly" | "Yearly" };

export default function PriceCard({
  title,
  desc,
  prices,
  price,
  highlight,
}: CardProps) {
  return (
    <div
      className={`p-4 relative  ${
        highlight
          ? "bg-[#000000] h-full text-white "
          : "bg-[#f5f5f5] h-[80%] text-black"
      }   flex-1 max-w-[350px] text-center flex flex-col items-center justify-center gap-6`}
    >
      {highlight && (
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-violet-500" />
      )}
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="text-[0.9rem] text-zinc-500">{desc}</p>

      <div>
        <h2 className="font-bold text-4xl tracking-wider">
          ${prices[price === "Monthly" ? 0 : 1].toFixed(2)}
        </h2>
        <p className="text-sm text-zinc-500">
          per {price === "Monthly" ? "month" : "year"}
        </p>
      </div>

      <button
        className={`p-2 uppercase w-[90%] text-[0.85rem] font-bold px-8 ${
          highlight
            ? "bg-white text-black hover:bg-zinc-300 hover:text-black"
            : " text-white bg-black hover:bg-zinc-300 hover:text-black"
        } transition-all duration-500 ease-in-out cursor-pointer tracking-widest`}
      >
        <p>pick a plan</p>
      </button>
    </div>
  );
}
