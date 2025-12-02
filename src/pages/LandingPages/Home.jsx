import AmongOurCustomer from "@/components/HomeComponent/AmongOurCustomer";
import Hero from "@/components/HomeComponent/Hero";
import RepresentPlatform from "@/components/HomeComponent/RepresentPlatform";
import ReviewSection from "@/components/HomeComponent/ReviewSection";
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

      {/* Review Section */}
      <ReviewSection />
    </div>
  );
};

export default Home;
