// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'research_and_support', label: 'Research and Support' },
  { href: '/', key: 'use_the_librarie', label: 'Use the Libraries' },
  { href: '/', key: 'about', label: 'About' },
];


// 没啥用 马上删掉
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];


// BLOCK MENU
import { MenuProps } from '@/types'
export const MENU_ITEMS: Array<MenuProps> = [
  {
    title:'Inclusive Excellence At MU Libraries',
    linkGroups: [
      {
        label: 'University Libraries Diversity Statement, Statement on Racism, and Land Acknowledgement',
        link: '/',
      },
      {
        label: 'DEI Committee',
        link: '/',
      },
      {
        label: 'Commitment to Inclusive Excellence',
        link: '/',
      },
      {
        label: 'Diversity, Equity, and Inclusion FY23 Annual Report',
        link: '/',
      },
    ],
  },
  {
    title:'Resources Available For You',
    linkGroups: [
      {
        label: 'DEI Textbooks on Reserve',
        link: '/',
      },
      {
        label: 'Heath and Wellness Kits',
        link: '/',
      },
      {
        label: 'DEI titles in the digital leisure reading collection',
        link: '/',
      },
      {
        label: 'Accessibility Resources',
        link: '/',
      },
      {
        label: 'Lived Experiences: Race at Miami University',
        link: '/',
      },
      {
        label: 'Finding Freedom Summer Traveling Exhibit',
        link: '/',
      },
    ],
  },
  {
    title:'Partnerships',
    linkGroups: [
      {
        label: 'ACRL Diversity Alliance',
        link: 'https://www.ala.org/acrl/issues/diversityalliance',
      },
      {
        label: 'Butler Tech Project Search',
        link: 'https://www.butlertech.org/transition-programs/project-search/',
      },
      {
        label: 'OhioLINK Luminaries Program',
        link: 'https://www.ohiolink.edu/content/ohiolink_initiatives',
      },
    ],
  },
]

// LUMINARIES
import MarlowZuchImage from "@/public/Luminaries/placeholder.jpg"
import RomeroPearsonImage from '@/public/Luminaries/RomeroPearson.jpeg'
import HalHowardImage from '@/public/Luminaries/HalHoward.jpeg'
import AshleySankeyImage from '@/public/Luminaries/AshleySankey.jpeg'

export const LUMSTUDENTS = [
  {
    year: '2023-2024 Participant',
    name: 'Marlow Zuch',
    display: [
      {
        name: 'Marlow Zuch',
        major: 'History major',
        image: MarlowZuchImage,
      },
    ],
  },
  {
    year: '2022-2023 Participant',
    name: 'Romero Pearson & Hal Howard',
    display: [
      {
        name: 'Romero Pearson',
        major: 'Software Engineering major',
        image: RomeroPearsonImage,
      },
      {
        name: 'Hal Howard',
        major: 'Computer Science major',
        image: HalHowardImage,
      },
    ],
  },
  {
    year: '2021-2022 Participant',
    name: 'Hal Howard & Ashley Sankey',
    display: [
      {
        name: 'Hal Howard',
        major: 'Computer Science major',
        image: HalHowardImage,
      },
      {
        name: 'Ashley Sankey',
        major: 'History major',
        image: AshleySankeyImage,
      },
    ],
  },
]


// DEI GRANTS
import LGBTQImage from '@/public/DEIGrants/LGBTQMovie.jpg'
import MakeHERspaceImage from '@/public/DEIGrants/MakeHERspace.jpg'
import MuralsImage from '@/public/DEIGrants/Murals.jpg'
import SocialJusticeImage from '@/public/DEIGrants/SocialJustice.jpeg'
import UNIDOSImage from '@/public/DEIGrants/UNIDOSGames.jpeg'

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


import AmericanIndianImage from '@/public/Heritage/AmericanIndian.jpg'
import ArabAmericanImage from '@/public/Heritage/ArabAmerican.jpg'
import APIDAImage from "@/public/Heritage/APIDA.jpeg"


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
    img_source:
      "https://libapps.s3.amazonaws.com/accounts/8211/images/Adjusted_AAHM.jpg",
  },
];




// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Hilink',
      'Press Releases',
      'Environment',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'hilink@akinthil.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};