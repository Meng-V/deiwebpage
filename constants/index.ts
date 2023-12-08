// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'research_and_support', label: 'Research and Support' },
  { href: '/', key: 'use_the_librarie', label: 'Use the Libraries' },
  { href: '/', key: 'about', label: 'About' },
  { href: '/video', key: 'video', label: 'Video' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const Block_Menu = [
  {
    title: 'Inclusive Excellence at Miami University Libraries',
    icon: '/map.svg',
    variant: 'green',
    menu_item: [
      {
        title: 'University Libraries Diversity Statement, Statement on Racism, and Land Acknowledgement',
        link: '/',
      },
      {
        title: 'DEI Committee',
        link: '/',
      },
      {
        title: 'Commitment to Inclusive Excellence',
        link:'https://drive.google.com/file/d/1IxiHre74uvq01h4xuLa_PmKvGmTGmfn3/view',
      },
      {
        title:'Diversity, Equity, and Inclusion FY23 Annual Report',
        link:'https://drive.google.com/file/d/1GvV2cMRtTga9U5urkKVSkd0_QMEZNwuR/view?usp=sharing',
      }
    ]
  },
  {
    title: 'Resources available for you',
    icon: '/calendar.svg',
    variant: 'yellow',
    menu_item: [
      {
        title: 'DEI Textbooks on Reserve',
        link: 'https://libguides.lib.miamioh.edu/reserves-textbooks/coursematerial',
      },
      {
        title: 'Heath and Wellness Kits',
        link: 'http://lib.miamioh.edu/2022-04-19-new-health-and-wellness-kits-for-checkout-funded-by-student-technology-fee',
      },
      {
        title: 'DEI titles in the digital leisure reading collection',
        link:'https://www.lib.miamioh.edu/2022-01-24-popular-e-books-and-audiobooks-now-available-for-leisure-reading-through-axis-360',
      },
      {
        title:'Accessibility Resources',
        link:'https://www.lib.miamioh.edu/research/instruction/accessibility/'
      },
      {
        title:'Lived Experiences: Race at Miami University',
        link:'https://livedmu.lib.miamioh.edu/'
      },
      {
        title:'Finding Freedom Summer Traveling Exhibit',
        link:'https://findingfreedom.lib.miamioh.edu/'
      }
    ]
  },
  {
    title: 'Partnerships',
    icon: '/tech.svg',
    variant: 'gray',
    menu_item: [
      {
        title: 'ACRL Diversity Alliance',
        link: 'https://www.ala.org/acrl/issues/diversityalliance',
      },
      {
        title: 'Butler Tech Project Search',
        link: 'https://www.butlertech.org/transition-programs/project-search/',
      },
      {
        title: 'OhioLINK Luminaries Program',
        link:'https://www.ohiolink.edu/content/ohiolink_initiatives',
      }
    ]
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

import MarlowZuchImage from "@/public/Luminaries/placeholder.jpg"
import RomeroPearsonImage from '@/public/Luminaries/RomeroPearson.jpeg'
import HalHowardImage from '@/public/Luminaries/HalHoward.jpeg'
import AshleySankeyImage from '@/public/Luminaries/AshleySankey.jpeg'


export const days = [
  {
    name: '2023-2024 Participant',
    date: 'Marlow Zuch',
    speakers: [
      {
        name: 'Marlow Zuch',
        role: 'History major',
        image: MarlowZuchImage,
      },
    ],
  },
  {
    name: '2022-2023 Participant',
    date: 'Romero Pearson & Hal Howard',
    speakers: [
      {
        name: 'Romero Pearson',
        role: 'Software Engineering major',
        image: RomeroPearsonImage,
      },
      {
        name: 'Hal Howard',
        role: 'Computer Science major',
        image: HalHowardImage,
      },
    ],
  },
  {
    name: '2021-2022 Participant',
    date: 'Hal Howard & Ashley Sankey',
    speakers: [
      {
        name: 'Hal Howard',
        role: 'Computer Science major',
        image: HalHowardImage,
      },
      {
        name: 'Ashley Sankey',
        role: 'History major',
        image: AshleySankeyImage,
      },
    ],
  },
]


export const grants = [
  {
    name: "New Arrivals",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Workspace",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg",
  },
  {
    name: "Accessories",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg",
  },
  {
    name: "Sale",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
  },
];