import { HomeWork } from "./components/icons/mono/HomeWork";
import { NoImage } from "./components/icons/mono/NoImage";
import { SagirovLogo } from "./components/icons/mono/SagirovLogo";
import { FojinLogo } from "./components/icons/poly/FojinLogo";
import { MagicSquareLogo } from "./components/icons/poly/MagicSquareLogo";

const TECHNOLOGY_TYPE = {
  PROGRAMMING_LANGUAGE: 'PROGRAMMING_LANGUAGE',
  LIBRARY: 'LIBRARY',
  MONOREPO: 'MONOREPO',
  STYLE_SHEET_LANGUAGE: 'STYLE_SHEET_LANGUAGE',
  MARKUP_LANGUAGE: 'MARKUP_LANGUAGE',
} as const

type TechnologyTypeName = keyof typeof TECHNOLOGY_TYPE;

type TechnologyType = typeof TECHNOLOGY_TYPE[TechnologyTypeName];

export interface ResumeData {
  firstName: string;
  lastName: string;
  position: string;
  isAvailableForHire: boolean;
  shortDescription: string;
  email: string;
  socialHandles: {
    telegram: string;
    linkedin: string;
  },
  experience: {
    id: string;
    companyName: string;
    websiteUrl?: string;
    position: string;
    startedAt: string;
    endedAt?: string;
    description: string;
    technologyIds: string[];
  }[];
  technologies: {
    id: string;
    name: string;
    type: TechnologyType;
  }[]
}

const COMPANY_LOGO_BY_ID = {
  magicsquare: MagicSquareLogo,
  fojin: FojinLogo,
  sagirov: SagirovLogo,
  freelance: HomeWork
}

export const getCompanyLogoById = (id: string) => {
  return COMPANY_LOGO_BY_ID[id as keyof typeof COMPANY_LOGO_BY_ID];
}

export const resume: ResumeData = {
  firstName: 'Aleksandr',
  lastName: 'Aganov',
  isAvailableForHire: true,
  shortDescription: 'I build some good shit that everyone deserves. Hire me and you will never forget how amazing stuff I build. Every time when you will interact with my UI you will cum with buckets',
  position: 'Senior Frontend Engineer',
  email: 'aganov.dev@gmail.com',
  socialHandles: {
    telegram: 'alexaganov',
    linkedin: 'alexaganov'
  },
  experience: [
    {
      id: 'magicsquare',
      companyName: 'Magic Square',
      websiteUrl: 'https://magicsquare.io/',
      position: 'Senior Frontend Developer',
      startedAt: '2022-12-31T16:00:00.000Z',
      endedAt: '2024-09-30T16:00:00.000Z',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technologyIds: ['typescript', 'react', 'react-query', 'nextjs', 'web3', 'web3js', 'ethersjs', 'wagmi', 'figma', 'mui', 'shadcn', 'dapps', 'javascript', 'nx', 'vite', 'radix-ui', 'css', 'scss', 'git', 'tailwind', 'html']
    },
    {
      id: 'fojin',
      companyName: 'Fojin',
      websiteUrl: 'https://en.fojin.tech/',
      position: 'Senior Frontend Developer',
      startedAt: '2021-03-31T16:00:00.000Z',
      endedAt: '2022-12-31T16:00:00.000Z',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technologyIds: ['typescript', 'react', 'nextjs', 'mui', 'web3', 'ethersjs', 'figma', 'dapps', 'javascript', 'styled-components', 'css', 'scss', 'git', 'redux', 'redux-toolkit', 'html']
    },
    {
      id: 'sagirov',
      companyName: 'Sagirov',
      websiteUrl: 'https://sagirov.com/',
      position: 'Middle Frontend Developer',
      startedAt: '2019-04-30T16:00:00.000Z',
      endedAt: '2021-02-28T16:00:00.000Z',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technologyIds: ['typescript', 'react', 'nextjs', 'gsap', 'bootstrap', 'figma', 'javascript', 'css', 'scss', 'git', 'redux', 'html']
    },
    {
      id: 'freelance',
      companyName: 'Freelance',
      position: 'Web Developer',
      startedAt: '2016-05-31T16:00:00.000Z',
      endedAt: '2019-04-30T16:00:00.000Z',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technologyIds: ['javascript', 'vuejs', 'react', 'nodejs', 'php', 'wordpress', 'joomla', 'pug', 'bootstrap', 'css', 'scss', 'git', 'redux', 'html']
    },
  ],
  technologies: [
    {
      id: 'typescript',
      name: 'TypeScript',
      type: TECHNOLOGY_TYPE.PROGRAMMING_LANGUAGE
    },
    {
      id: 'react',
      name: 'React',
      type: TECHNOLOGY_TYPE.LIBRARY
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      type: TECHNOLOGY_TYPE.PROGRAMMING_LANGUAGE
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      type: TECHNOLOGY_TYPE.PROGRAMMING_LANGUAGE
    },
    {
      id: 'nx',
      name: 'Nx',
      type: TECHNOLOGY_TYPE.MONOREPO
    },
    {
      id: 'html',
      name: 'HTML',
      type: TECHNOLOGY_TYPE.MARKUP_LANGUAGE
    },
    {
      id: 'pug',
      name: 'Pug',
      type: TECHNOLOGY_TYPE.MARKUP_LANGUAGE
    },
    {
      id: 'css',
      name: 'CSS',
      type: TECHNOLOGY_TYPE.STYLE_SHEET_LANGUAGE
    },
    {
      id: 'scss',
      name: 'SCSS',
      type: TECHNOLOGY_TYPE.STYLE_SHEET_LANGUAGE
    }
  ]
}
