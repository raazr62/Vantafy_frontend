import AmongOurCustomer from "@/components/HomeComponent/AmongOurCustomer";
import Hero from "@/components/HomeComponent/Hero";
import RepresentPlatform from "@/components/HomeComponent/RepresentPlatform";
import WhatWeDo from "@/components/HomeComponent/WhatWeDo";

const Home = () => {
  return (
    <div>
      <div className="bg-primary/1">
        <Hero />
      </div>

      {/* Represent Platform */}
      <RepresentPlatform />

      {/* AmongOurCustomer */}
      <AmongOurCustomer />

      {/* What We Do */}
      <WhatWeDo />
    </div>
  );
};

export default Home;
