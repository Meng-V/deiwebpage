// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "research_and_support", label: "Research and Support" },
  { href: "/", key: "use_the_librarie", label: "Use the Libraries" },
  { href: "/", key: "about", label: "About" },
];

// 没啥用 马上删掉
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// BLOCK MENU
import { MenuProps } from "@/types";
export const MENU_ITEMS: Array<MenuProps> = [
  {
    title: "Inclusive Excellence",
    linkGroups: [
      {
        label:
          "University Libraries Diversity Statement, Statement on Racism, and Land Acknowledgement",
        link: "/",
      },
      {
        label: "DEI Committee",
        link: "/",
      },
      {
        label: "Commitment to Inclusive Excellence",
        link: "https://drive.google.com/file/d/1IxiHre74uvq01h4xuLa_PmKvGmTGmfn3/view",
      },
      {
        label: "Diversity, Equity, and Inclusion FY23 Annual Report",
        link: "https://drive.google.com/file/d/1GvV2cMRtTga9U5urkKVSkd0_QMEZNwuR/view?usp=sharing",
      },
    ],
  },
  {
    title: "Resources Available",
    linkGroups: [
      {
        label: "DEI Textbooks on Reserve",
        link: "https://libguides.lib.miamioh.edu/reserves-textbooks/coursematerial",
      },
      {
        label: "Heath and Wellness Kits",
        link: "http://lib.miamioh.edu/2022-04-19-new-health-and-wellness-kits-for-checkout-funded-by-student-technology-fee",
      },
      {
        label: "DEI titles in the digital leisure reading collection",
        link: "https://www.lib.miamioh.edu/2022-01-24-popular-e-books-and-audiobooks-now-available-for-leisure-reading-through-axis-360",
      },
      {
        label: "Accessibility Resources",
        link: "https://www.lib.miamioh.edu/research/instruction/accessibility/",
      },
      {
        label: "Antiracist Resources",
        link: "https://libguides.lib.miamioh.edu/antiracist-resources",
      },
      {
        label: "Lived Experiences: Race at Miami University",
        link: "https://livedmu.lib.miamioh.edu/",
      },
      {
        label: "Finding Freedom Summer Traveling Exhibit",
        link: "https://findingfreedom.lib.miamioh.edu/",
      },
    ],
  },
  {
    title: "Partnerships",
    linkGroups: [
      {
        label: "ACRL Diversity Alliance",
        link: "https://www.ala.org/acrl/issues/diversityalliance",
      },
      {
        label: "Butler Tech Project Search",
        link: "https://www.butlertech.org/transition-programs/project-search/",
      },
      {
        label: "OhioLINK Luminaries Program",
        link: "https://www.ohiolink.edu/content/ohiolink_initiatives",
      },
    ],
  },
];

// LUMINARIES
import MarlowZuchImage from "@/public/Luminaries/placeholder.jpg";
import RomeroPearsonImage from "@/public/Luminaries/RomeroPearson.jpeg";
import HalHowardImage from "@/public/Luminaries/HalHoward.jpeg";
import AshleySankeyImage from "@/public/Luminaries/AshleySankey.jpeg";

export const LUMSTUDENTS = [
  {
    year: "2023-2024 Participant",
    name: "Marlow Zuch",
    display: [
      {
        name: "Marlow Zuch",
        major: "History major",
        image: MarlowZuchImage,
        year: "Class of ‘26",
      },
    ],
  },
  {
    year: "2022-2023 Participant",
    name: "Romero Pearson & Hal Howard",
    display: [
      {
        name: "Romero Pearson",
        major: "Software Engineering major",
        image: RomeroPearsonImage,
        year: "Class of ‘24",
      },
      {
        name: "Hal Howard",
        major: "Computer Science major",
        image: HalHowardImage,
        year: "Class of ‘23",
      },
    ],
  },
  {
    year: "2021-2022 Participant",
    name: "Hal Howard & Ashley Sankey",
    display: [
      {
        name: "Hal Howard",
        major: "Computer Science major",
        image: HalHowardImage,
        year: "Class of ‘23",
      },
      {
        name: "Ashley Sankey",
        major: "History major",
        image: AshleySankeyImage,
        year: "Class of ‘22",
      },
    ],
  },
];

// DEI GRANTS
import LGBTQImage from "@/public/DEIGrants/LGBTQMovie.jpg";
import MakeHERspaceImage from "@/public/DEIGrants/MakeHERspace.jpg";
import MuralsImage from "@/public/DEIGrants/Murals.jpg";
import SocialJusticeImage from "@/public/DEIGrants/SocialJustice.jpeg";
import UNIDOSImage from "@/public/DEIGrants/UNIDOSGames.jpeg";

export const GRANTS = [
  {
    name: "LGBTQ Movie",
    href: "#",
    imageSrc: LGBTQImage,
  },
  {
    name: "MakeHERspace",
    href: "#",
    imageSrc: MakeHERspaceImage,
  },
  {
    name: "Murals",
    href: "#",
    imageSrc: MuralsImage,
  },
  {
    name: "Social Justice Storytelling",
    href: "#",
    imageSrc: SocialJusticeImage,
  },
  {
    name: "UNIDOS Games",
    href: "#",
    imageSrc: UNIDOSImage,
  },
];

import AmericanIndianImage from "@/public/Heritage/AmericanIndian.jpg";
import APIDAImage from "@/public/Heritage/APIDA.jpg";
import ArabAmericanImage from "@/public/Heritage/ArabAmerican.jpg";
import BlackHistoryImage from "@/public/Heritage/BlackHistoryMonth.jpg";
import DEIMiddleTownImage from "@/public/Heritage/DEIMiddletown.jpg";
import DeafHistoryMonthImage from "@/public/Heritage/DeafHistoryMonth.png";
import DisabilityMonthImage from "@/public/Heritage/DisabilityMonth.png";
import HispanicImage from "@/public/Heritage/Hispanic.jpg";
import HispanicHeritageImage from "@/public/Heritage/HispanicHeritage.jpg";
import PrideMiddletownImage from "@/public/Heritage/PrideMiddletown.jpg";
import TransgenderImage from "@/public/Heritage/TransgenderAwareness.jpg";
import WomensHistoryMonthImage from "@/public/Heritage/WomensHistoryMonth.jpg";

export const HERITAGE_ITEMS = [
  {
    title: "Antiracist Resources",
    link: "https://libguides.lib.miamioh.edu/antiracist-resources",
    img_source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "Arab American Heritage Month",
    link: "https://libguides.lib.miamioh.edu/ArabAmerican",
    img_source: ArabAmericanImage,
  },
  {
    title: "Asian Pacific Islander Desi American Heritage Month",
    link: "https://libguides.lib.miamioh.edu/APIDA",
    img_source: APIDAImage,
  },
  {
    title: "Black History Month",
    link: "https://libguides.lib.miamioh.edu/BHM",
    img_source: BlackHistoryImage,
  },
  {
    title: "Deaf History Month",
    link: "https://libguides.lib.miamioh.edu/deafhistory",
    img_source: DeafHistoryMonthImage,
  },
  {
    title: "Disability Identity and Culture Month Resources",
    link: "https://libguides.lib.miamioh.edu/disability",
    img_source: DisabilityMonthImage,
  },
  {
    title: "Hispanic Heritage Month",
    link: "https://libguides.lib.miamioh.edu/HispanicHeritage",
    img_source: HispanicHeritageImage,
  },
  {
    title: "Jewish American History Month",
    link: "https://libguides.lib.miamioh.edu/JewishAmerican",
    img_source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "LGBTQIA+ History and Pride",
    link: "https://libguides.lib.miamioh.edu/LGBTQIAdates",
    img_source: PrideMiddletownImage,
  },
  {
    title: "Native American Heritage Month",
    link: "https://libguides.lib.miamioh.edu/NativeAmerican",
    img_source: AmericanIndianImage,
  },
  {
    title: "Women's History Month",
    link: "https://libguides.lib.miamioh.edu/WHM",
    img_source: WomensHistoryMonthImage,
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};