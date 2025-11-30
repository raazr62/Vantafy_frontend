import { RepresentPlatformLogos } from "@/lib/HomeMockData";

const RepresentPlatformCarousel = () => {
  return (
    <div className="overflow-hidden relative w-full select-none container pt-15 group">
      {/* Left Fade */}
      <div className="absolute left-0 top-0 h-full w-50 z-10 pointer-events-none bg-linear-to-r from-white via-50% via-white/40 to-transparent" />

      <div className="flex whitespace-nowrap animate-marquee group-hover:animation-paused">
        {/* First Set */}
        {RepresentPlatformLogos.map((logo) => (
          <img
            key={logo.id}
            src={logo.logo}
            alt={logo.alt}
            className="h-10 mx-8 inline-block object-contain"
            draggable={false}
          />
        ))}

        {/* Second Set (for looping) */}
        {RepresentPlatformLogos.map((logo) => (
          <img
            key={`2-${logo.id}`}
            src={logo.logo}
            alt={logo.alt}
            className="h-10 mx-8 inline-block object-contain"
            draggable={false}
          />
        ))}
      </div>

      {/* Right Fade */}
      <div className="absolute right-0 top-0 h-full w-50 z-10 pointer-events-none bg-linear-to-l  from-white via-50% via-white/40 to-transparent" />
    </div>
  );
};

export default RepresentPlatformCarousel;
