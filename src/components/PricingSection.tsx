"use client";

import React, { useState } from "react";
import { plans } from "../data/data";
import { PlanType } from "../types";
import PriceCard from "./PriceCard";
import PriceTable from "./PriceTable";

export default function PricingSection() {
  const [price, setPrice] = useState<"Monthly" | "Yearly">("Monthly");

  return (
    <section className="flex flex-col gap-15 lg:gap-30  items-center w-full">
      <div className="w-fit flex items-center justify-center gap-4 lg:gap-8">
        <button
          onClick={() => setPrice("Monthly")}
          className={`text-lg font-bold tracking-wider cursor-pointer ${
            price === "Monthly" ? "text-zinc-500" : "text-black"
          }`}
        >
          <p>Monthly</p>
        </button>
        <div
          onClick={() =>
            setPrice((prev) => (prev === "Monthly" ? "Yearly" : "Monthly"))
          }
          className="h-8 rounded-full cursor-pointer relative  bg-[#dedede] aspect-video  p-1"
        >
          <div
            className={`bg-black h-[80%]  top-1/2 -translate-y-1/2 absolute aspect-square rounded-full ${
              price === "Monthly" ? "left-1" : "left-7"
            } transition-all duration-300 ease-in-out`}
          ></div>
        </div>
        <button
          onClick={() => setPrice("Yearly")}
          className={`text-lg font-bold tracking-wider cursor-pointer ${
            price === "Yearly" ? "text-zinc-500" : "text-black"
          }`}
        >
          Yearly
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 w-full h-[50vh]">
        {plans.map((plan: PlanType, index: number) => (
          <PriceCard
            key={index}
            title={plan.title}
            desc={plan.desc}
            prices={plan.prices}
            price={price}
            btn={plan.btn}
            highlight={plan.highlight}
          />
        ))}
      </div>

      <PriceTable />
    </section>
  );
}
