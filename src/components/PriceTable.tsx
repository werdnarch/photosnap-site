import React from "react";
import { tableFeatures } from "../data/data";
import TableRow from "./TableRow";

export default function PriceTable() {
  return (
    <table className="w-full max-w-[800px]">
      <caption className="mb-8">
        <h1 className="text-4xl uppercase font-bold tracking-widest">
          Compare
        </h1>
      </caption>

      <thead>
        <tr className="uppercase font-bold tracking-wider text-[0.9rem] border-b-1">
          <td className="w-[55%] p-6 text-left">The features</td>
          <td className="w-[15%] p-6 text-center">basic</td>
          <td className="w-[15%] p-6 text-center">pro</td>
          <td className="w-[15%] p-6 text-center">business</td>
        </tr>
      </thead>

      <tbody>
        {tableFeatures.headerRows.map((row: string, index: number) => (
          <TableRow key={index} name={row} plans={tableFeatures.plans} />
        ))}
      </tbody>
    </table>
  );
}
