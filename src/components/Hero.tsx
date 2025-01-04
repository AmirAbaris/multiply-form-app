import React from "react";

export default function Hero() {
  return (
    <div className="mx-auto">
      <h1 className="font-extrabold text-9xl pt-24">Welcome to FormFlow</h1>
      <div className="rounded-3xl mt-12">
        <img
          src="../../public/assets/images/cc1.jpg"
          alt="hero cover"
          className="rounded-3xl aspect-video max-h-[800px] mx-auto"
        />
      </div>
    </div>
  );
}
