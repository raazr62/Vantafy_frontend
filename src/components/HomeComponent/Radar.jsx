import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useMemo } from "react";
import { LocalImages } from "../AllPhotos/HomeLocalImages";

export default function Radar({ hero_radar_icons }) {
  // Use motion value instead of state to avoid re-renders
  const rotation = useMotionValue(0);

  // Memoize radarLogos to prevent recreating on every render
  const radarLogos = useMemo(
    () =>
      hero_radar_icons.map((logo, index) => ({
        id: index + 1,
        image: logo,
        alt: `Logo ${index + 1}`,
      })),
    [hero_radar_icons],
  );

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

  // Spinner rotation offset
  const SCANNER_OFFSET = -80;

  // Update motion value directly - no re-renders!
  useAnimationFrame((t) => {
    const angle = (t / 2500) * 360;
    rotation.set(angle % 360);
  });

  const getDotAngle = (x, y) => {
    const px = parseFloat(x);
    const py = parseFloat(y);
    const dx = px - 50;
    const dy = py - 50;
    return (Math.atan2(dy, dx) * 180) / Math.PI + 180;
  };

  // Calculate logo positions in a circle
  const radius = 215;
  const center = { x: 200, y: 200 };

  // Memoize logo positions to prevent recreating on every render
  const logoPositions = useMemo(
    () =>
      radarLogos.map((logo, index) => {
        const angle = (index / radarLogos.length) * 2 * Math.PI;
        const x = center.x + radius * Math.cos(angle);
        const y = center.y + radius * Math.sin(angle);
        return { ...logo, x, y };
      }),
    [radarLogos],
  );

  return (
    <div className="lg:p-10">
      <div className="relative min-w-[400px] min-h-[400px] origin-center scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-100">
        <div className="relative w-full h-full">
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

        {/* Dots - using motion value for rotation */}
        {dots.map((dot, i) => {
          const dotAngle = getDotAngle(dot.x, dot.y);

          return (
            <motion.div
              key={i}
              style={{
                left: dot.x,
                top: dot.y,
                zIndex: 20,
                opacity: useTransform(rotation, (r) => {
                  const scannerAngle = (r + SCANNER_OFFSET + 360) % 360;
                  const fadeIn = Math.abs(scannerAngle - dotAngle) < 20;
                  return fadeIn ? 1 : 0;
                }),
                scale: useTransform(rotation, (r) => {
                  const scannerAngle = (r + SCANNER_OFFSET + 360) % 360;
                  const fadeIn = Math.abs(scannerAngle - dotAngle) < 20;
                  return fadeIn ? 1.6 : 1;
                }),
              }}
              transition={{ duration: 0.4 }}
              className="absolute w-1.5 h-1.5 bg-purple-600 rounded-full shadow-lg shadow-purple-400/40"
            />
          );
        })}

        {/* Logos around the radar */}
        {logoPositions.map((logo) => (
          <motion.img
            key={logo.id}
            src={import.meta.env.VITE_IMAGE_URL + logo.image}
            alt={logo.alt}
            className="absolute w-8"
            style={{
              left: logo.x - 20,
              top: logo.y - 10,
              zIndex: 30,
            }}
          />
        ))}
      </div>
    </div>
  );
}
