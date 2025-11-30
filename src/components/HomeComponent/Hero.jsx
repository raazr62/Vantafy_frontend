import React from "react";
import { Button } from "../ui/button";
import { LocalImages } from "../AllPhotos/HomeLocalImages";

const Hero = () => {
  return (
    <section className="flex container mx-auto justify-between items-center py-20">
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

      <video
        src={LocalImages.heroGif}
        autoPlay
        loop
        muted
        playsInline
        className="w-130"
        onLoadedMetadata={(e) => {
          e.target.playbackRate = 2.5;
        }}
      ></video>
    </section>
  );
};

export default Hero;
