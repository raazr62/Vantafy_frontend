import { DashboardLocalImages } from "@/components/AllPhotos/DashboardLocalImages";
import {
  AffiliateIconSVG,
  HomeIconSVG,
  MessageIconSVG,
  PlansIconSVG,
  RequestRemovalIconSVG,
  TeamIconSVG,
  UsersIconSVG,
} from "@/components/SVG/DashboardLayoutSVG";

export const nichesMockData = [
  "Images",
  "woman",
  "Chubby",
  "E-girl",
  "ASMR",
  "Fitness",
  "Nerdy",
  "JOI",
  "Videos",
  "Trans",
  "BIG D",
  "Gym",
  "Gamer",
  "Native",
  "Cute",
  "Girly",
  "Pantyhouse",
  "Streams",
  "LGBTQ+",
  "Big Butt",
  "Girl next door",
  "Couple",
  "MILF",
  "Faceless",
  "Try-ons",
  "BDSM",
  "Man",
  "Dominatrix",
  "Other",
  "Goth/alt",
  "Lingerie",
  "Cosplay",
  "Feet",
];

export const socialMediaAccountsMockData = [
  {
    id: 1,
    name: "OnlyFans",
    logo: DashboardLocalImages.OnlyFansLogo,
  },
  {
    id: 2,
    name: "Fansly",
    logo: DashboardLocalImages.fanslyLogo,
  },
  {
    id: 3,
    name: "Instagram",
    logo: DashboardLocalImages.instagramLogo,
  },
  {
    id: 4,
    name: "Twitter/X",
    logo: DashboardLocalImages.twitterLogo,
  },
  {
    id: 5,
    name: "TikTok",
    logo: DashboardLocalImages.titokLogo,
  },
];

export const sidebarLinks = [
  {
    id: 1,
    name: "Dashboard",
    to: "/dashboard/overview",
    icon: <HomeIconSVG />,
  },
  {
    id: 2,
    name: "Message",
    to: "/dashboard/message",
    icon: <MessageIconSVG />,
  },
  {
    id: 3,
    name: "Team",
    to: "/dashboard/team",
    icon: <TeamIconSVG />,
  },
  {
    id: 4,
    name: "My Account",
    to: "/dashboard/my-account",
    icon: <UsersIconSVG />,
  },
  {
    id: 5,
    name: "Request Removal",
    to: "/dashboard/request-removal",
    icon: <RequestRemovalIconSVG />,
  },
  {
    id: 6,
    name: "Affiliate Program",
    to: "/dashboard/affiliate-program",
    icon: <AffiliateIconSVG />,
  },
  {
    id: 7,
    name: "Plans",
    to: "/dashboard/plans",
    icon: <PlansIconSVG />,
  },
];

export const accountStatsMockData = [
  {
    id: 1,
    info: "Potential Revenue",
    quantity: "$599",
  },
  {
    id: 2,
    info: "Infringing Site",
    quantity: 76,
  },
  {
    id: 3,
    info: "Image Found",
    quantity: 800,
  },
  {
    id: 4,
    info: "Video Found",
    quantity: 150,
  },
  {
    id: 5,
    info: "Delisted",
    quantity: "1,540",
  },
  {
    id: 6,
    info: "Full Deletion",
    quantity: 150,
  },
];

export const linksMockData = [
  "https://www.thisisarandomlink.com/not-real/for-demo-purposes-",
  "https://www.thisisarandomlink.com/not-real/for-demo-purposes-",
  "https://www.thisisarandomlink.com/not-real/for-demo-purposes-",
  "https://www.thisisarandomlink.com/not-real/for-demo-purposes-",
  "https://www.thisisarandomlink.com/not-real/for-demo-purposes-",
  "https://www.thisisarandomlink.com/not-real/for-demo-purposes-",
  "https://www.thisisarandomlink.com/not-real/for-demo-purposes-",
  "https://www.thisisarandomlink.com/not-real/for-demo-purposes-",
  "https://www.thisisarandomlink.com/not-real/for-demo-purposes-",
  "https://www.thisisarandomlink.com/not-real/for-demo-purposes-",
  "https://www.thisisarandomlink.com/not-real/for-demo-purposes-",
];
