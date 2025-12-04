import AmongOurCustomer from "@/components/HomeComponent/AmongOurCustomer";
import FAQ from "@/components/HomeComponent/FAQ";
import Hero from "@/components/HomeComponent/Hero";
import HowItWorks from "@/components/HomeComponent/HowItWorks";
import PricingAndPlans from "@/components/HomeComponent/PricingAndPlans";
import RepresentPlatform from "@/components/HomeComponent/RepresentPlatform";
import ReviewSection from "@/components/HomeComponent/ReviewSection";
import WeServed from "@/components/HomeComponent/WeServed";
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

      {/* We Served */}
      <WeServed />

      {/* How It Works */}
      <HowItWorks />

      {/* Pricing & Plans */}
      <PricingAndPlans />

      {/* FAQ */}
      <FAQ />
    </div>
  );
};

export default Home;
