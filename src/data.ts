import { HomeWork } from "./components/icons/mono/HomeWork";
import { NoImage } from "./components/icons/mono/NoImage";
import { SagirovLogo } from "./components/icons/mono/SagirovLogo";
import { FojinLogo } from "./components/icons/poly/FojinLogo";
import { MagicSquareLogo } from "./components/icons/poly/MagicSquareLogo";

export interface ResumeDataTechnology {
  id: string;
  name: string;
  description: string;
};

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
  technologies: ResumeDataTechnology[]
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
  shortDescription: 'I create accessible, user-friendly UIs across all platforms, ensuring&nbsp;a&nbsp;smooth and enjoyable experience for every user',
  // <br />For this, I primarily use React, TypeScript, Tailwind, and Next.js, along with other modern technologies.<br/>I also specialize in building solutions for Web3.
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
      technologyIds: ['typescript', 'react', 'react-query', 'nextjs', 'web3', 'web3js', 'ethersjs', 'wagmi', 'figma', 'mui', 'shadcn', 'dapps', 'javascript', 'nx', 'vite', 'radixui', 'css', 'scss', 'git', 'tailwind', 'html', 'gitlab']
    },
    {
      id: 'fojin',
      companyName: 'Fojin',
      websiteUrl: 'https://en.fojin.tech/',
      position: 'Senior Frontend Developer',
      startedAt: '2021-03-31T16:00:00.000Z',
      endedAt: '2022-12-31T16:00:00.000Z',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technologyIds: ['typescript', 'react', 'nextjs', 'mui', 'web3', 'ethersjs', 'figma', 'dapps', 'javascript', 'styled-components', 'css', 'scss', 'git', 'redux', 'redux-toolkit', 'html', 'github']
    },
    {
      id: 'sagirov',
      companyName: 'Sagirov',
      websiteUrl: 'https://sagirov.com/',
      position: 'Middle Frontend Developer',
      startedAt: '2019-04-30T16:00:00.000Z',
      endedAt: '2021-02-28T16:00:00.000Z',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technologyIds: ['typescript', 'react', 'nextjs', 'gsap', 'bootstrap', 'figma', 'javascript', 'css', 'scss', 'git', 'redux', 'html', 'github']
    },
    {
      id: 'freelance',
      companyName: 'Freelance',
      position: 'Web Developer',
      startedAt: '2016-05-31T16:00:00.000Z',
      endedAt: '2019-04-30T16:00:00.000Z',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      technologyIds: ['javascript', 'vuejs', 'react', 'nodejs', 'php', 'wordpress', 'joomla', 'pug', 'bootstrap', 'css', 'scss', 'git', 'redux', 'html', 'github']
    },
  ],
  technologies: [
    {
      id: 'typescript',
      name: 'TypeScript',
      description: 'Programming Language'
    },
    {
      id: 'react',
      name: 'React',
      description: 'Frontend Library'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      description: 'Programming Language'
    },
    {
      id: 'nextjs',
      name: 'NextJs',
      description: 'Full Stack Framework'
    },
    {
      id: 'mui',
      name: 'MUI',
      description: 'React Component Library'
    },
    {
      id: 'tailwind',
      name: 'Tailwind',
      description: 'CSS framework',
    },
    {
      id: 'styled-components',
      name: 'Styled Components',
      description: 'CSS-in-JS Library'
    },
    {
      id: 'gitlab',
      name: 'Gitlab',
      description: 'Code collaboration and automation'
    },
    {
      id: 'github',
      name: 'Github',
      description: 'Code collaboration and automation'
    },
    {
      id: 'radixui',
      name: 'Radix UI',
      description: 'Headless UI Component Library'
    },
    {
      id: 'gsap',
      name: 'GSAP',
      description: 'High-performance web animations library'
    },
    {
      id: 'wagmi',
      name: 'Wagmi',
      description: 'Web3 React hooks toolkit'
    },
    {
      id: 'shadcnui',
      name: 'Shadcn UI',
      description: 'Customizable React component library'
    },
    {
      id: 'nodejs',
      name: 'NodeJS',
      description: 'Programming Language'
    },
    {
      id: 'ethersjs',
      name: 'Ethers.js',
      description: 'Ethereum JavaScript library toolkit',
    },
    {
      id: 'web3js',
      name: 'Web3.js',
      description: 'JavaScript library for Ethereum',
    },
    {
      id: 'web3',
      name: 'Web3',
      description: 'Set of Technologies for building dapps'
    },
    {
      id: 'nx',
      name: 'Nx',
      description: 'Build System for Monorepos'
    },
    {
      id: 'html',
      name: 'HTML',
      description: 'Markup Language'
    },
    {
      id: 'pug',
      name: 'Pug',
      description: 'Markup Language'
    },
    {
      id: 'css',
      name: 'CSS',
      description: 'Style Sheet Language'
    },
    {
      id: 'scss',
      name: 'SCSS',
      description: 'Style Sheet Language'
    },
    {
      id: 'php',
      name: 'PHP',
      description: 'Programming Language',
    },
    {
      id: 'figma',
      name: 'Figma',
      description: 'Design Tool',
    },
    {
      id: 'vuejs',
      name: 'Vue.js',
      description: 'Progressive JavaScript Framework',
    },
    {
      id: 'expressjs',
      name: 'Express.js',
      description: 'back end web application framework',
    },
    {
      id: 'redux',
      name: 'Redux',
      description: 'State Management Library',
    },
    {
      id: 'redux-toolkit',
      name: 'Redux Toolkit',
      description: 'Simplified Redux State Management Library',
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      description: 'CSS framework for responsive design.',
    },
    {
      id: 'git',
      name: 'GIT',
      description: 'Version Control System',
    },
    {
      id: 'wordpress',
      name: 'WordPress',
      description: 'Web Content Management System',
    },
    {
      id: 'joomla',
      name: 'Joomla',
      description: 'Web Content Management System',
    },
    {
      id: 'viem',
      name: 'Joomla',
      description: 'Web Content Management System',
    },
    {
      id: 'eslint',
      name: 'Eslint',
      description: 'Code linting tool'
    },
    {
      id: 'react-query',
      name: 'React Query',
      description: 'Data-fetching library for React'
    },
    {
      id: 'webpack',
      name: 'Webpack',
      description: 'Build Tool'
    },
    {
      id: 'storybook',
      name: 'Storybook',
      description: 'UI component development environment'
    },
    {
      id: 'vite',
      name: 'Vite',
      description: 'Build Tool'
    },
    {
      id: 'docker',
      name: 'Docker',
      description: 'Containerization platform for applications',
    },
  ]
}
