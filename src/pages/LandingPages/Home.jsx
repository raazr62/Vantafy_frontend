import AmongOurCustomer from "@/components/HomeComponent/AmongOurCustomer";
import Device from "@/components/HomeComponent/Device";
import FAQ from "@/components/HomeComponent/FAQ";
import Hero from "@/components/HomeComponent/Hero";
import HowItWorks from "@/components/HomeComponent/HowItWorks";
import IdentityTracking from "@/components/HomeComponent/IdentityTracking";
import PricingAndPlans from "@/components/HomeComponent/PricingAndPlans";
import RepresentPlatform from "@/components/HomeComponent/RepresentPlatform";
import ReviewSection from "@/components/HomeComponent/ReviewSection";
import WeServed from "@/components/HomeComponent/WeServed";
import WhatWeDo from "@/components/HomeComponent/WhatWeDo";

const Home = () => {
  return (
    <div>
      <div className="bg-linear-to-b from-sky-300 to-50% to-transparent relative -top-10 sm:static">
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

      {/* Identity Tracking */}
      <IdentityTracking />

      {/* Pricing & Plans */}
      <PricingAndPlans />

      {/* Device */}
      <Device />

      {/* FAQ */}
      <FAQ />
    </div>
  );
};

export default Home;
