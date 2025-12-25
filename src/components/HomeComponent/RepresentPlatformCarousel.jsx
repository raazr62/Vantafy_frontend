import { RepresentPlatformLogos } from "@/lib/HomeMockData";
import Marquee from "react-fast-marquee";

const RepresentPlatformCarousel = () => {
  return (
    <div className="overflow-hidden relative w-full select-none container pt-10 sm:pt-12 lg:pt-15 group">
      {/* Left Fade */}
      <div className="absolute left-0 top-0 h-full w-40 sm:w-45 lg:w-50 z-10 pointer-events-none bg-linear-to-r from-white via-50% via-white/40 to-transparent" />

      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {RepresentPlatformLogos.map((logo) => (
          <img
            key={logo.id}
            src={logo.logo}
            alt={logo.alt}
            className="h-6 sm:h-8 lg:h-10 mx-4 sm:mx-6 lg:mx-8 inline-block object-contain"
            draggable={false}
          />
        ))}
      </Marquee>

      {/* Right Fade */}
      <div className="absolute right-0 top-0 h-full w-40 sm:w-45 lg:w-50 z-10 pointer-events-none bg-linear-to-l  from-white via-50% via-white/40 to-transparent" />
    </div>
  );
};

export default RepresentPlatformCarousel;
