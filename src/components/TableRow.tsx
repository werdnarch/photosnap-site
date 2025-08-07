import React from "react";
import TickIcon from "./TickIcon";

interface TableRow {
  name: string;
  plans?: {
    name: string;
    features: string[];
  }[];
}

export default function TableRow({ name, plans }: TableRow) {
  return (
    <tr className="uppercase font-bold tracking-widest text-[0.75rem] border-b-1  border-zinc-200">
      <td className="w-[55%] p-6 text-left">{name}</td>

      {plans?.map((plan, index: number) => (
        <td key={index} className="w-[15%] p-6 text-center">
          {plan.features.includes(name) ? (
            <div className="w-full h-full flex items-center justify-center">
              <TickIcon width={15} />
            </div>
          ) : null}
        </td>
      ))}
    </tr>
  );
}
