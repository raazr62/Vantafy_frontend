import React from "react";
import { Button } from "../ui/button";
import Radar from "./Radar";

const Hero = () => {
  return (
    <section className="flex container mx-auto justify-between items-center pt-40 overflow-hidden">
      {/* Hero Description */}
      <div className="space-y-4 max-w-4xl">
        <h1 className="font-bold text-5xl/tight">
          Protect your images & videos automatically.
        </h1>
        <p className="text-xl text-lightText/60">
          An AI platform that detects and removes unauthorized media online,
          protecting your creative work around the clock with smart automation.
        </p>
        <Button className={"font-semibold px-8 py-4"}>Get Protected</Button>
      </div>

      {/* Radar */}
      <Radar />
    </section>
  );
};

export default Hero;
