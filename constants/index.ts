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

import andrewGreeneImage from "@/public/images/avatars/andrew-greene.jpg"
import cathleneBurrageImage from '@/public/images/avatars/cathlene-burrage.jpg'
import damarisKimuraImage from '@/public/images/avatars/damaris-kimura.jpg'
import dianneGuilianelliImage from '@/public/images/avatars/dianne-guilianelli.jpg'
import erhartCockrinImage from '@/public/images/avatars/erhart-cockrin.jpg'
import giordanoSagucioImage from '@/public/images/avatars/giordano-sagucio.jpg'
import gordonSandersonImage from '@/public/images/avatars/gordon-sanderson.jpg'
import heatherTerryImage from '@/public/images/avatars/heather-terry.jpg'
import ibrahimFraschImage from '@/public/images/avatars/ibrahim-frasch.jpg'
import jaquelinIschImage from '@/public/images/avatars/jaquelin-isch.jpg'
import kimberlyParsonsImage from '@/public/images/avatars/kimberly-parsons.jpg'
import parkerJohnsonImage from '@/public/images/avatars/parker-johnson.jpg'
import piersWilkinsImage from '@/public/images/avatars/piers-wilkins.jpg'
import richardAstley from '@/public/images/avatars/richard-astley.jpg'
import rinaldoBeynonImage from '@/public/images/avatars/rinaldo-beynon.jpg'
import ronniCantadoreImage from '@/public/images/avatars/ronni-cantadore.jpg'
import stevenMchailImage from '@/public/images/avatars/steven-mchail.jpg'
import waylonHydenImage from '@/public/images/avatars/waylon-hyden.jpg'


export const days = [
  {
    name: '2023-2024 Participant',
    date: 'Marlow Zuch',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Steven McHail',
        role: 'Designer at Globex Corporation',
        image: stevenMchailImage,
      },
    ],
  },
  {
    name: '2022-2023 Participant',
    date: 'Romero Pearson & Hal Howard',
    dateTime: '2022-04-05',
    speakers: [
      {
        name: 'Damaris Kimura',
        role: 'Senior Engineer at OCP',
        image: damarisKimuraImage,
      },
      {
        name: 'Ibrahim Frasch',
        role: 'Programmer at Umbrella Corp',
        image: ibrahimFraschImage,
      },
    ],
  },
  {
    name: '2021-2022 Participant',
    date: 'Hal Howard & Ashley Sankey',
    dateTime: '2022-04-06',
    speakers: [
      {
        name: 'Andrew Greene',
        role: 'Frontend Developer at Ultratech',
        image: andrewGreeneImage,
      },
      {
        name: 'Heather Terry',
        role: 'Backend Developer at Xanatos Enterprises',
        image: heatherTerryImage,
      },
    ],
  },
]