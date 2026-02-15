import GlobalLoader from "@/components/common/GlobalLoader";
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
import { useLandingPage } from "@/hooks/useLandingPage";

const Home = () => {
  const { data, isLoading, isError } = useLandingPage();

  if (isLoading) {
    return <GlobalLoader />;
  }

  if (isError) {
    return <div className="text-center py-20">Something went wrong.</div>;
  }

  const {
    hero_section,
    customers,
    faqs,
    hero_radar_icons = [],
    how_it_works,
    identity_tracking,
    platforms,
    testimonials,
  } = data?.data || {};

  return (
    <div>
      <div className="bg-linear-to-b from-sky-300 to-50% to-transparent relative -top-10 sm:static">
        <Hero hero_radar_icons={hero_radar_icons} hero_section={hero_section} />
      </div>

      {/* Represent Platform */}
      <RepresentPlatform platforms={platforms} />

      {/* AmongOurCustomer */}
      <AmongOurCustomer customers={customers} />

      {/* What We Do */}
      <WhatWeDo />

      {/* Review Section */}
      <ReviewSection testimonials={testimonials} />

      {/* We Served */}
      <WeServed />

      {/* How It Works */}
      <HowItWorks how_it_works={how_it_works} />

      {/* Identity Tracking */}
      <IdentityTracking identity_tracking={identity_tracking} />

      {/* Pricing & Plans */}
      <PricingAndPlans />

      {/* Device */}
      <Device />

      {/* FAQ */}
      <FAQ faqs={faqs} />
    </div>
  );
};

export default Home;
