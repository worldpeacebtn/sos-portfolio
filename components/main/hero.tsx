import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
<div className="relative w-full h-screen overflow-visible">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
        <source src="/videos/blackhole.mp4" type="video/mp4" />
      </video>

      <HeroContent />
    </div>
  );
};
