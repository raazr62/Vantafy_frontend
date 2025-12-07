import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";
import { LocalImages } from "../AllPhotos/HomeLocalImages";

export default function Radar() {
  const [rotation, setRotation] = useState(0);

  const dots = [
    { x: "30%", y: "75%" },
    { x: "30%", y: "55%" },
    { x: "25%", y: "35%" },
    { x: "42%", y: "30%" },
    { x: "65%", y: "25%" },
    { x: "70%", y: "45%" },
    { x: "75%", y: "65%" },
    { x: "60%", y: "65%" },
  ];

  // Spinner start rotation offset (depends on your PNG)
  const SCANNER_OFFSET = -80; // adjust if needed

  useAnimationFrame((t) => {
    const angle = (t / 2500) * 360;
    setRotation(angle % 360);
  });

  const getDotAngle = (x, y) => {
    const px = parseFloat(x);
    const py = parseFloat(y);
    const dx = px - 50;
    const dy = py - 50;
    return (Math.atan2(dy, dx) * 180) / Math.PI + 180;
  };

  return (
    <div className="overflow-hidden rounded-xl relative w-[400px]">
      <img src={LocalImages.radarBG} className="w-full" alt="Radar" />

      {/* Rotating scanner */}
      <motion.img
        animate={{
          rotate: 360,
          transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        src={LocalImages.radarSpinner}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        alt="Radar Spinner"
      />

      {/* Dots */}
      {dots.map((dot, i) => {
        const angle = getDotAngle(dot.x, dot.y);

        const scannerAngle = (rotation + SCANNER_OFFSET + 360) % 360;

        const fadeIn = Math.abs(scannerAngle - angle) < 20;

        return (
          <motion.div
            key={i}
            animate={{
              opacity: fadeIn ? 1 : 0,
              scale: fadeIn ? 1.6 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="absolute w-1.5 h-1.5 bg-purple-600 rounded-full shadow-lg shadow-purple-400/40"
            style={{
              left: dot.x,
              top: dot.y,
              zIndex: 20,
            }}
          />
        );
      })}
    </div>
  );
}
