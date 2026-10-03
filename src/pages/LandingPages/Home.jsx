import AmongOurCustomer from "@/components/HomeComponent/AmongOurCustomer";
import FAQ from "@/components/HomeComponent/FAQ";
import Hero from "@/components/HomeComponent/Hero";
import HowItWorks from "@/components/HomeComponent/HowItWorks";
import IdentityTracking from "@/components/HomeComponent/IdentityTracking";
import PricingAndPlans from "@/components/HomeComponent/PricingAndPlans";
import RepresentPlatform from "@/components/HomeComponent/RepresentPlatform";
import ReviewSection from "@/components/HomeComponent/ReviewSection";
import WeServed from "@/components/HomeComponent/WeServed";
import WhatWeDo from "@/components/HomeComponent/WhatWeDo";
import { useLandingPage } from "@/hooks/useLandingPage";

const Home = () => {
  const { data, isLoading, isError } = useLandingPage();

  const {
    hero_section,
    customers,
    faqs,
    hero_radar_icons = [],
    how_it_works,
    identity_tracking,
    platforms,
    testimonials,
    our_metrics,
  } = data?.data || {};

  return (
    <div>
      <div className="bg-linear-to-b from-sky-300 to-50% to-transparent relative -top-10 sm:static">
        <Hero
          hero_radar_icons={hero_radar_icons}
          hero_section={hero_section}
          isLoading={isLoading}
          isError={isError}
        />
      </div>

      {/* Represent Platform */}
      <RepresentPlatform
        platforms={platforms}
        isLoading={isLoading}
        isError={isError}
      />

      {/* AmongOurCustomer */}
      <AmongOurCustomer
        customers={customers}
        isLoading={isLoading}
        isError={isError}
      />

      {/* What We Do — static, no loading state needed */}
      <WhatWeDo />

      {/* Review Section */}
      <ReviewSection
        testimonials={testimonials}
        isLoading={isLoading}
        isError={isError}
      />

      {/* We Served */}
      <WeServed
        our_metrics={our_metrics}
        isLoading={isLoading}
        isError={isError}
      />

      {/* How It Works */}
      <HowItWorks
        how_it_works={how_it_works}
        isLoading={isLoading}
        isError={isError}
      />

      {/* Identity Tracking */}
      <IdentityTracking
        identity_tracking={identity_tracking}
        isLoading={isLoading}
        isError={isError}
      />

      {/* Pricing & Plans — static, no loading state needed */}
      <PricingAndPlans />

      {/* FAQ */}
      <FAQ faqs={faqs} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default Home;
