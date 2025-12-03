import { LocalImages } from "@/components/AllPhotos/HomeLocalImages";
import {
  AiProtectionSVG,
  AnonymousSVG,
  BrowserIconSVG,
  DocumentScanSVG,
  FileHostingSVG,
  GoogleHomeSVG,
  ImpressionSVG,
  PersonalAgentSVG,
  PlatformsSVG,
  SearchIconSVG,
  ShareIconSVG,
  TakedownSVG,
} from "@/components/SVG/HomeLayoutSVG";

export const NavlinksItems = [
  { id: 1, name: "What we do", link: "/#what-we-do" },
  { id: 2, name: "Pricing", link: "/#pricing" },
  { id: 3, name: "Testimonial", link: "/#testimonial" },
  { id: 4, name: "Faq", link: "/#faq" },
];

export const RepresentPlatformLogos = [
  { id: 1, logo: LocalImages.representPlatformLogo1, alt: "Chaturbate Logo" },
  { id: 2, logo: LocalImages.representPlatformLogo2, alt: "Fansly Logo" },
  { id: 3, logo: LocalImages.representPlatformLogo3, alt: "Fanvue Logo" },
  { id: 4, logo: LocalImages.representPlatformLogo4, alt: "OnlyFans Logo" },
  { id: 5, logo: LocalImages.representPlatformLogo5, alt: "Manyvids Logo" },
  { id: 6, logo: LocalImages.representPlatformLogo3, alt: "Fanvue Logo" },
  { id: 7, logo: LocalImages.representPlatformLogo2, alt: "Fansly Logo" },
  { id: 8, logo: LocalImages.representPlatformLogo4, alt: "OnlyFans Logo" },
  { id: 9, logo: LocalImages.representPlatformLogo1, alt: "Chaturbate Logo" },
  { id: 10, logo: LocalImages.representPlatformLogo5, alt: "Manyvids Logo" },
];

export const ourCustomerMockData = [
  {
    id: 1,
    name: "Eifa jonathan",
    subscribe: "32.6",
    companyLogo: LocalImages.representPlatformLogo1,
    avatar: LocalImages.eifajonathan,
  },
  {
    id: 2,
    name: "Jordi Kader",
    subscribe: "32.6",
    companyLogo: LocalImages.representPlatformLogo2,
    avatar: LocalImages.jordikader,
  },
  {
    id: 3,
    name: "Narendra Hasina",
    subscribe: "32.6",
    companyLogo: LocalImages.representPlatformLogo3,
    avatar: LocalImages.narendrahasina,
  },
  {
    id: 4,
    name: "Shekh Modi",
    subscribe: "32.6",
    companyLogo: LocalImages.representPlatformLogo4,
    avatar: LocalImages.shekhmodi,
  },
  {
    id: 5,
    name: "Jr. Franklin",
    subscribe: "32.6",
    companyLogo: LocalImages.representPlatformLogo5,
    avatar: LocalImages.jrFranklin,
  },
];

export const WhatWeDoMockData = [
  {
    id: 1,
    name: "Scan",
    icon: <DocumentScanSVG className={"group-hover:text-white"} />,
  },
  {
    id: 2,
    name: "Delist",
    icon: <GoogleHomeSVG className={"group-hover:text-white"} />,
  },
  {
    id: 3,
    name: "Takedown",
    icon: <TakedownSVG className={"group-hover:text-white"} />,
  },
  {
    id: 4,
    name: "Impresonation",
    icon: <ImpressionSVG className={"group-hover:text-white"} />,
  },
  {
    id: 5,
    name: "Platforms",
    icon: <PlatformsSVG className={"group-hover:text-white"} />,
  },
  {
    id: 6,
    name: "Personal Agent",
    icon: <PersonalAgentSVG className={"group-hover:text-white"} />,
  },
  {
    id: 7,
    name: "Ai Protection",
    icon: <AiProtectionSVG className={"group-hover:text-white"} />,
  },
  {
    id: 8,
    name: "Anonymous",
    icon: <AnonymousSVG className={"group-hover:text-white"} />,
  },
];

export const InspectMockData = [
  {
    id: 1,
    detail: "Google search, images and videos results",
    icon: <SearchIconSVG />,
  },
  {
    id: 2,
    detail: "72,000+ websites including video platforms and forums",
    icon: <BrowserIconSVG />,
  },
  {
    id: 3,
    detail:
      "Social media: reedit, twitter, Instagram, tikTok, YouTube, Facebook, VK",
    icon: <ShareIconSVG />,
  },
  {
    id: 4,
    detail: "File hosting and sharing services",
    icon: <FileHostingSVG />,
  },
];

export const ReviewSectionMockData = [
  {
    id: 1,
    userName: "Eifa Jonathan",
    userAvatar: LocalImages.eifajonathan,
    userFollowers: "32.6K",
    userReview:
      "As an agency owner, this tool is essential. I can protect all my creators from a single dashboard. Worth every penny.",
    rating: 5,
    userCompanyLogo: LocalImages.representPlatformLogo1,
    removedLeaks: 342,
    successRate: "98.7%",
  },
  {
    id: 2,
    userName: "Jordi Kader",
    userAvatar: LocalImages.jordikader,
    userFollowers: "45.2K",
    userReview:
      "The automated scanning is incredible. I used to spend hours searching for leaks myself. Now it all happens automatically.",
    rating: 4,
    userCompanyLogo: LocalImages.representPlatformLogo2,
    removedLeaks: 289,
    successRate: "97.5%",
  },
  {
    id: 3,
    userName: "Narendra Hasina",
    userAvatar: LocalImages.narendrahasina,
    userFollowers: "28.9K",
    userReview:
      "This platform saved my business. They found and removed over 300 leaks in the first month alone. I finally feel protected.",
    rating: 5,
    userCompanyLogo: LocalImages.representPlatformLogo3,
    removedLeaks: 310,
    successRate: "99.2%",
  },
  {
    id: 4,
    userName: "Shekh Modi",
    userAvatar: LocalImages.shekhmodi,
    userFollowers: "39.7K",
    userReview:
      "The takedown requests are handled quickly and professionally. I've seen a significant drop in unauthorized content since using this service.",
    rating: 4,
    userCompanyLogo: LocalImages.representPlatformLogo4,
    removedLeaks: 275,
    successRate: "98.0%",
  },
  {
    id: 5,
    userName: "Jr. Franklin",
    userAvatar: LocalImages.jrFranklin,
    userFollowers: "51.3K",
    userReview:
      "I was skeptical at first, but this tool exceeded my expectations. The personal agent feature is a game-changer for managing my online presence.",
    rating: 5,
    userCompanyLogo: LocalImages.representPlatformLogo5,
    removedLeaks: 400,
    successRate: "99.5%",
  },
];

export const WeServedMockData = [
  { id: 1, label: "Web search", value: "55M" },
  { id: 2, label: "Content Creators", value: "1M" },
  { id: 3, label: "Leaks found", value: "55M" },
  { id: 4, label: "Recovered", value: "55M" },
  { id: 5, label: "Success Score", value: "100%" },
];

export const HowItWorksMockData = [
  {
    id: 1,
    question: "Create & Optimize a free account",
    answer:
      "Sign up for a free DIY account. You can specify your niches and all of your usernames to make sure the free scan finds as many leaks as possible.",
  },
  {
    id: 2,
    question: "Explore where your leaks appear",
    answer:
      "Our platform helps you quickly identify where your content or data is leaking online. With detailed scanning tools, you can pinpoint the exact sources of leaks, making it easy to take action before they spread further.",
  },
  {
    id: 3,
    question: "Remove leaks by yourself or automatically",
    answer:
      "You have full control over leak removal. Choose to handle it manually with our step-by-step tools, or let our system automatically remove unauthorized content for you, saving time and ensuring faster protection.",
  },
  {
    id: 4,
    question: "Track progress & automatic scans",
    answer:
      "Stay updated on your leak protection efforts with real-time tracking. Our automatic scans continuously monitor the web for new leaks, and you can track removal success, statistics, and overall progress from your dashboard.",
  },
];

export const MonthlyPricingPlansMockData = [
  {
    id: 1,
    planName: "Silver",
    price: "$900",
    features: [
      "5 Creators. Save $250!",
      "Billed Monthly",
      "Daily Report",
      "Unlimited Stage Names",
      "Daily Scans",
      "Unlimited google Delisting",
      "Unlimited Bing Delisting",
      "Unlimited Social Media Removals",
      "Unlimited User Submitted Request",
      "Quantum scan with unlimited link removal",
      "Specialized human Searches",
      "Dedicated Support",
    ],
  },
  {
    id: 2,
    planName: "Gold",
    price: "$1700",
    features: [
      "10 Creators. Save $600!",
      "Billed Monthly",
      "Daily Report",
      "Unlimited Stage Names",
      "Daily Scans",
      "Unlimited google Delisting",
      "Unlimited Bing Delisting",
      "Unlimited Social Media Removals",
      "Unlimited User Submitted Request",
      "Quantum scan with unlimited link removal",
      "Specialized human Searches",
      "Dedicated Support",
    ],
  },
  {
    id: 3,
    planName: "Platinum",
    price: "$2400",
    features: [
      "15 Creators. Save $1,050!",
      "Billed Monthly",
      "Daily Report",
      "Unlimited Stage Names",
      "Daily Scans",
      "Unlimited google Delisting",
      "Unlimited Bing Delisting",
      "Unlimited Social Media Removals",
      "Unlimited User Submitted Request",
      "Quantum scan with unlimited link removal",
      "Specialized human Searches",
      "Dedicated Support",
    ],
  },
  {
    id: 4,
    planName: "Diamond",
    price: "$3000",
    features: [
      "20 Creators. Save $1,600!",
      "Billed Monthly",
      "Daily Report",
      "Unlimited Stage Names",
      "Daily Scans",
      "Unlimited google Delisting",
      "Unlimited Bing Delisting",
      "Unlimited Social Media Removals",
      "Unlimited User Submitted Request",
      "Quantum scan with unlimited link removal",
      "Specialized human Searches",
      "Dedicated Support",
    ],
  },
];

export const AnnualPricingPlansMockData = [
  {
    id: 1,
    planName: "Silver",
    price: "$9,000",
    features: [
      "5 Creators. Save $250!",
      "Billed Monthly",
      "Daily Report",
      "Unlimited Stage Names",
      "Daily Scans",
      "Unlimited google Delisting",
      "Unlimited Bing Delisting",
      "Unlimited Social Media Removals",
      "Unlimited User Submitted Request",
      "Quantum scan with unlimited link removal",
      "Specialized human Searches",
      "Dedicated Support",
    ],
  },
  {
    id: 2,
    planName: "Gold",
    price: "$17,000",
    features: [
      "10 Creators. Save $600!",
      "Billed Monthly",
      "Daily Report",
      "Unlimited Stage Names",
      "Daily Scans",
      "Unlimited google Delisting",
      "Unlimited Bing Delisting",
      "Unlimited Social Media Removals",
      "Unlimited User Submitted Request",
      "Quantum scan with unlimited link removal",
      "Specialized human Searches",
      "Dedicated Support",
    ],
  },
  {
    id: 3,
    planName: "Platinum",
    price: "$24,000",
    features: [
      "15 Creators. Save $1,050!",
      "Billed Monthly",
      "Daily Report",
      "Unlimited Stage Names",
      "Daily Scans",
      "Unlimited google Delisting",
      "Unlimited Bing Delisting",
      "Unlimited Social Media Removals",
      "Unlimited User Submitted Request",
      "Quantum scan with unlimited link removal",
      "Specialized human Searches",
      "Dedicated Support",
    ],
  },
  {
    id: 4,
    planName: "Diamond",
    price: "$30,000",
    features: [
      "20 Creators. Save $1,600!",
      "Billed Monthly",
      "Daily Report",
      "Unlimited Stage Names",
      "Daily Scans",
      "Unlimited google Delisting",
      "Unlimited Bing Delisting",
      "Unlimited Social Media Removals",
      "Unlimited User Submitted Request",
      "Quantum scan with unlimited link removal",
      "Specialized human Searches",
      "Dedicated Support",
    ],
  },
];

export const AgencyPricingPlansMockData = [
  {
    id: 1,
    planName: "Silver",
    price: "$18,000",
    features: [
      "20 Creators. Save $250!",
      "Billed Monthly",
      "Daily Report",
      "Unlimited Stage Names",
      "Daily Scans",
      "Unlimited google Delisting",
      "Unlimited Bing Delisting",
      "Unlimited Social Media Removals",
      "Unlimited User Submitted Request",
      "Quantum scan with unlimited link removal",
      "Specialized human Searches",
      "Dedicated Support",
    ],
  },
  {
    id: 2,
    planName: "Gold",
    price: "$34,000",
    features: [
      "30 Creators. Save $600!",
      "Billed Monthly",
      "Daily Report",
      "Unlimited Stage Names",
      "Daily Scans",
      "Unlimited google Delisting",
      "Unlimited Bing Delisting",
      "Unlimited Social Media Removals",
      "Unlimited User Submitted Request",
      "Quantum scan with unlimited link removal",
      "Specialized human Searches",
      "Dedicated Support",
    ],
  },
  {
    id: 3,
    planName: "Platinum",
    price: "$48,000",
    features: [
      "45 Creators. Save $1,050!",
      "Billed Monthly",
      "Daily Report",
      "Unlimited Stage Names",
      "Daily Scans",
      "Unlimited google Delisting",
      "Unlimited Bing Delisting",
      "Unlimited Social Media Removals",
      "Unlimited User Submitted Request",
      "Quantum scan with unlimited link removal",
      "Specialized human Searches",
      "Dedicated Support",
    ],
  },
  {
    id: 4,
    planName: "Diamond",
    price: "$60,000",
    features: [
      "50 Creators. Save $1,600!",
      "Billed Monthly",
      "Daily Report",
      "Unlimited Stage Names",
      "Daily Scans",
      "Unlimited google Delisting",
      "Unlimited Bing Delisting",
      "Unlimited Social Media Removals",
      "Unlimited User Submitted Request",
      "Quantum scan with unlimited link removal",
      "Specialized human Searches",
      "Dedicated Support",
    ],
  },
];

export const FAQMockData = [
  {
    id: 1,
    question: "Alright, but what exactly do you do?",
    answer:
      "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.",
  },
  {
    id: 2,
    question:
      "I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together?",
    answer:
      "Absolutely. Even if you don’t need full brand strategy support, I can still help you plan and execute your upcoming campaign. I’ll align with your existing brand direction and ensure the campaign is delivered professionally and effectively.",
  },
  {
    id: 3,
    question: "Are your rates competitive?",
    answer:
      "Yes. My rates are structured to offer a strong balance of quality, expertise, and value. You get personalized attention, clear communication, and high-quality deliverables without unnecessary overhead costs.",
  },
  {
    id: 4,
    question: "Why do you have a monthly project cap?",
    answer:
      "I limit the number of projects I take on each month to ensure every client receives my full focus and consistent quality. This approach helps maintain clear communication, faster turnaround times, and better results for each project.",
  },
];
