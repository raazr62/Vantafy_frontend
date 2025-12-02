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
    id: 1,
    name: "Delist",
    icon: <GoogleHomeSVG className={"group-hover:text-white"} />,
  },
  {
    id: 1,
    name: "Takedown",
    icon: <TakedownSVG className={"group-hover:text-white"} />,
  },
  {
    id: 1,
    name: "Impresonation",
    icon: <ImpressionSVG className={"group-hover:text-white"} />,
  },
  {
    id: 1,
    name: "Platforms",
    icon: <PlatformsSVG className={"group-hover:text-white"} />,
  },
  {
    id: 1,
    name: "Personal Agent",
    icon: <PersonalAgentSVG className={"group-hover:text-white"} />,
  },
  {
    id: 1,
    name: "Ai Protection",
    icon: <AiProtectionSVG className={"group-hover:text-white"} />,
  },
  {
    id: 1,
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
