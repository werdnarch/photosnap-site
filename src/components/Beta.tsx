import React from "react";
import Button from "./Button";

export default function Beta() {
  return (
    <section
      style={{
        backgroundImage: `url("/assets/shared/desktop/bg-beta.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[30vh]"
    >
      <div className="w-[80%] h-full text-white flex mx-auto items-center justify-between">
        <h1 className="text-4xl uppercase text-white max-w-[400px] tracking-widest font-bold">
          We're in beta. Get your invite today!
        </h1>

        <Button buttonName="get an invite" />
      </div>
    </section>
  );
}
