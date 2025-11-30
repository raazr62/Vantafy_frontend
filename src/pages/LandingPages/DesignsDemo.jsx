import React from "react";
import "@/components/Designs/designs.css";
import Radar from "@/components/Designs/Radar";
import HeroImage from "@/components/Designs/HeroImage";
import TwitterIcon from "@/components/Designs/TwitterIcon";
import FanvueLogo from "@/components/Designs/FanvueLogo";

export default function DesignsDemo() {
  return (
    <div className="designs-demo">
      <h2 style={{ marginBottom: 12 }}>Figma Designs Preview</h2>
      <div className="designs-grid">
        <div>
          <Radar />
          <div className="radar-caption">Radar / animation (from Figma)</div>
        </div>

        <div>
          <HeroImage />
          <div className="radar-caption">Hero image / cropped artwork</div>
        </div>

        <div>
          <TwitterIcon />
          <div className="radar-caption">Twitter asset</div>
        </div>

        <div>
          <FanvueLogo />
          <div className="radar-caption">Fanvue logo asset</div>
        </div>
      </div>
    </div>
  );
}
