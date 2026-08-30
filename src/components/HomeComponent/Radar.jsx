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

        {/* Logos around the radar */}
        {logoPositions.map((logo) => (
          <div
            key={logo.id}
            className="absolute w-8 h-8 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${logo.x}px`,
              top: `${logo.y}px`,
              zIndex: 30,
            }}
          >
            <img
              src={
                logo.image?.startsWith("http")
                  ? logo.image
                  : import.meta.env.VITE_IMAGE_URL + logo.image
              }
              alt={logo.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
