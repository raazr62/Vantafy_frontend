import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";
import { LocalImages } from "../AllPhotos/HomeLocalImages";

export default function Radar() {
  const [rotation, setRotation] = useState(0);

  const radarLogos = [
    { id: 1, image: LocalImages.chaturbateOnlyLogo, alt: "Chaturbate Logo" },
    { id: 2, image: LocalImages.facebookOnlyLogo, alt: "Facebook Logo" },
    { id: 3, image: LocalImages.instagramOnlyLogo, alt: "Instagram Logo" },
    { id: 4, image: LocalImages.twitterLogoOnlyLogo, alt: "Twitter Logo" },
    { id: 5, image: LocalImages.vKLogoOnlyLogo, alt: "VK Logo" },
    { id: 6, image: LocalImages.bangOnlyLogo, alt: "Bang Logo" },
    { id: 7, image: LocalImages.chaturbateOnlyLogo, alt: "Chaturbate Logo" },
    { id: 8, image: LocalImages.hamsterOnlyLogo, alt: "Hamster Logo" },
    { id: 9, image: LocalImages.onlyfansOnlyLogo, alt: "OnlyFans Logo" },
    { id: 10, image: LocalImages.fanvueLogoOnlyLogo, alt: "Fanvue Logo" },
    { id: 11, image: LocalImages.fanslyOnlyLogo, alt: "Fansly Logo" },
    { id: 12, image: LocalImages.porOnlyLogo, alt: "Por Logo" },
  ];

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

  //

  // Spinner rotation offset
  const SCANNER_OFFSET = -80;

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

  //
  // Calculate logo positions in a circle
  const radius = 215;
  const center = { x: 200, y: 200 };

  const logoPositions = radarLogos.map((logo, index) => {
    const angle = (index / radarLogos.length) * 2 * Math.PI;

    const x = center.x + radius * Math.cos(angle);
    const y = center.y + radius * Math.sin(angle);

    return { ...logo, x, y };
  });

  return (
    <div className="overflow-hidden rounded-xl relative w-[500px] h-[500px] flex items-center justify-center">
      <div className="relative w-[400px] h-[400px]">
        <div className="relative">
          <img src={LocalImages.radarBG} className="w-full" alt="Radar" />
        </div>

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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 scale-115"
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

      {/* Logos around the radar */}
      {logoPositions.map((logo) => (
        <motion.img
          key={logo.id}
          src={logo.image}
          alt={logo.alt}
          className="absolute w-8"
          style={{
            left: logo.x + 33,
            top: logo.y + 40,
            zIndex: 30,
          }}
        />
      ))}
    </div>
  );
}
