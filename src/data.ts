import { HomeWork } from './components/icons/mono/HomeWork';
import { SagirovLogo } from './components/icons/mono/SagirovLogo';
import { FojinLogo } from './components/icons/poly/FojinLogo';
import { MagicSquareLogo } from './components/icons/poly/MagicSquareLogo';
import { SalmonLogo } from './components/icons/poly/SalmonLogo';

export type ResumeDataTechnology = {
  id: string;
  name: string;
  description?: string;
  tags: string[];
};

export type ResumeExperience = {
  id: string;
  company: {
    id: string;
    name: string;
    brandColor?: string;
    websiteUrl?: string;
    location?: string;
  };
  position: string;
  startedAt: string;
  endedAt?: string;
  description: string;
  technologyIds: string[];
};

export type ResumeData = {
  nationality: string;
  firstName: string;
  lastName: string;
  position: string;
  isAvailableForHire: boolean;
  shortDescription: string;
  email: string;
  resumeUrl: string;
  socials: {
    telegram: string;
    linkedin: string;
    github: string;
    leetcode: string;
  };
  experience: ResumeExperience[];
  technologies: ResumeDataTechnology[];
};

const COMPANY_LOGO_BY_ID = {
  magicsquare: MagicSquareLogo,
  fojin: FojinLogo,
  sagirov: SagirovLogo,
  freelance: HomeWork,
  salmon: SalmonLogo,
} as const;

export const getCompanyLogoById = (id: string) => {
  return COMPANY_LOGO_BY_ID[id as keyof typeof COMPANY_LOGO_BY_ID];
};

export const resume: ResumeData = {
  firstName: 'Aleksandr',
  lastName: 'Aganov',
  nationality: 'Russian',
  isAvailableForHire: false,
  resumeUrl: 'https://drive.google.com/file/d/1-pw9CbCZniBau8M0ieKegpzub6BHK7AR/view',
  shortDescription: 'Designing and building<br/>clear, usable, reliable products',
  position: 'Senior Software Engineer',
  // Frontend-focused engineer with end-to-end ownership across backend, CI/CD, and production deployments.
  email: 'aganov.dev@gmail.com',
  socials: {
    linkedin: `https://www.linkedin.com/in/alexaganov`,
    github: `https://github.com/alexaganov`,
    telegram: `https://t.me/alexaganov`,
    leetcode: 'https://leetcode.com/u/alexaganov',
  },
  experience: [
    {
      id: 'salmon',
      company: {
        id: 'salmon',
        name: 'Salmon',
        brandColor: '#f7941d',
        location: 'PH',
        websiteUrl: 'https://salmon.ph/',
      },
      position: 'Senior Software Engineer',
      startedAt: '2025-03-17',
      description: `
        <ul>
          <li>Building UI and the systems around it for everyday banking in the Philippines</li>
        </ul>
      `,
      technologyIds: ['typescript', 'react', 'nextjs', 'react-query', 'mui', 'and more...'],
    },
    {
      id: 'magicsquare',
      company: {
        id: 'magicsquare',
        name: 'Magic Square',
        websiteUrl: 'https://magicsquare.io/',
      },
      position: 'Senior Frontend Developer',
      startedAt: '2022-12-31T16:00:00.000Z',
      endedAt: '2024-09-30T16:00:00.000Z',
      description: `
        <ul>
          <li>Developed user interfaces with React, TypeScript, and Tailwind, ensuring responsive, pixel-perfect displays across devices</li>
          <li>Collaborated with clients, designers, backend and blockchain teams to align features with requirements</li>
          <li>Architected a design system to unify components, improving usability and speeding up development</li>
          <li>Built dApps connected to smart contracts, allowing users direct blockchain interactions</li>
          <li>Performed code reviews to ensure quality and adherence to best practices</li>
        </ul>
      `,
      technologyIds: [
        'typescript',
        'react',
        'nextjs',
        'tailwind',
        'react-query',
        'web3js',
        'ethersjs',
        'wagmi',
        'radixui',
        'figma',
        'mui',
        'shadcnui',
        'javascript',
        'css',
        'scss',
        'html',
        'nx',
        'vite',
        'git',
        'gitlab',
        'webpack',
        'rollup',
        'babel',
        'eslint',
      ],
    },
    {
      id: 'fojin',
      company: {
        id: 'fojin',
        name: 'Fojin',
        websiteUrl: 'https://en.fojin.tech/',
      },
      position: 'Senior Frontend Developer',
      startedAt: '2021-03-31T16:00:00.000Z',
      endedAt: '2022-12-31T16:00:00.000Z',
      description: `
        <ul>
          <li>Built UI systems in React, TypeScript, and MUI to maintain consistent design across projects</li>
          <li>Mentored junior developers, providing guidance on project tasks and coding practices</li>
          <li>Built desktop and web apps with blockchain integration for secure, direct user interactions</li>
          <li>Worked with designers, backend, blockchain teams, and product owners to implement features as planned</li>
          <li>Conducted code reviews regularly to uphold quality and consistency</li>
        </ul>
      `,
      technologyIds: [
        'typescript',
        'react',
        'nextjs',
        'mui',
        'ethersjs',
        'figma',
        'dapps',
        'javascript',
        'styled-components',
        'css',
        'scss',
        'git',
        'redux',
        'redux-toolkit',
        'html',
        'github',
        'webpack',
        'babel',
        'eslint',
      ],
    },
    {
      id: 'sagirov',
      company: {
        id: 'sagirov',
        name: 'Sagirov',
        websiteUrl: 'https://sagirov.com/',
      },
      position: 'Middle Frontend Developer',
      startedAt: '2019-04-30T16:00:00.000Z',
      endedAt: '2021-02-28T16:00:00.000Z',
      description: `
        <ul>
          <li>Led UI development using React, JavaScript and Next.js</li>
          <li>Created UI animations and interactions for engaging experiences</li>
          <li>Optimized SEO, loading times, and performance across projects</li>
          <li>Collaborated directly with product owners and designers</li>
          <li>Planned projects architecture to support scalable and maintainable code</li>
        </ul>
      `,
      technologyIds: [
        'typescript',
        'react',
        'nextjs',
        'gsap',
        'bootstrap',
        'figma',
        'javascript',
        'css',
        'scss',
        'git',
        'redux',
        'html',
        'github',
        'pug',
        'bem',
      ],
    },
    {
      id: 'freelance',
      company: {
        id: 'freelance',
        name: 'Freelance',
      },
      position: 'Web Developer',
      startedAt: '2016-05-31T16:00:00.000Z',
      endedAt: '2019-04-30T16:00:00.000Z',
      description: `
        <ul>
          <li>Built sites, including e-commerce, landing pages and portfolios</li>
          <li>Ensured all websites were fully responsive and displayed consistently across major browsers</li>
          <li>Worked with clients to add features and fix bugs on existing sites</li>
          <li>Wrote scripts to scrape content and populate sites automatically</li>
          <li>Created scripts to automate repetitive tasks for clients</li>
        </ul>
      `,
      technologyIds: [
        'javascript',
        'nodejs',
        'php',
        'wordpress',
        'joomla',
        'vuejs',
        'gulp',
        'bootstrap',
        'css',
        'scss',
        'git',
        'html',
        'github',
        'bem',
      ],
    },
  ],
  technologies: [
    {
      id: 'typescript',
      name: 'TypeScript',
      description: 'Programming Language',
      tags: ['frontend', 'language'],
    },
    {
      id: 'javascript',
      name: 'JavaScript ES6+',
      description: 'Programming Language',
      tags: ['frontend', 'language'],
    },
    {
      id: 'react',
      name: 'React',
      description: 'Frontend Library',
      tags: ['frontend'],
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      description: 'Full Stack Framework',
      tags: ['frontend', 'backend'],
    },
    {
      id: 'tailwind',
      name: 'Tailwind',
      description: 'CSS framework',
      tags: ['frontend'],
    },
    {
      id: 'mui',
      name: 'MUI',
      description: 'React Component Library',
      tags: ['frontend'],
    },
    {
      id: 'redux',
      name: 'Redux',
      description: 'State Management Library',
      tags: ['frontend'],
    },
    {
      id: 'redux-toolkit',
      name: 'Redux Toolkit',
      description: 'Simplified Redux State Management Library',
      tags: ['frontend'],
    },
    {
      id: 'zustand',
      name: 'Zustand',
      tags: ['frontend'],
    },
    {
      id: 'react-query',
      name: 'React Query',
      description: 'Data-fetching library for React',
      tags: ['frontend'],
    },
    {
      id: 'radixui',
      name: 'Radix UI',
      description: 'Headless UI Component Library',
      tags: ['frontend'],
    },
    {
      id: 'styled-components',
      name: 'Styled Components',
      description: 'CSS-in-JS Library',
      tags: ['frontend'],
    },
    {
      id: 'gsap',
      name: 'GSAP',
      description: 'High-performance web animations library',
      tags: ['frontend'],
    },
    {
      id: 'react-spring',
      name: 'React Spring',
      tags: ['frontend'],
    },
    {
      id: 'wagmi',
      name: 'Wagmi',
      description: 'Web3 React hooks toolkit',
      tags: ['web3'],
    },
    {
      id: 'ethersjs',
      name: 'Ethers.js',
      description: 'Ethereum JavaScript library toolkit',
      tags: ['web3'],
    },
    {
      id: 'web3js',
      name: 'Web3.js',
      description: 'JavaScript library for Ethereum',
      tags: ['web3'],
    },
    {
      id: 'viem',
      name: 'Viem',
      description: 'TypeScript interface for Ethereum',
      tags: ['web3'],
    },
    {
      id: 'connectkit',
      name: 'Connectkit',
      tags: ['web3'],
    },
    {
      id: 'reown',
      name: 'Reown',
      tags: ['web3'],
    },
    {
      id: 'nodejs',
      name: 'NodeJS',
      description: 'Programming Language',
      tags: ['backend', 'language'],
    },
    {
      id: 'shadcnui',
      name: 'Shadcn UI',
      description: 'Customizable React component library',
      tags: ['frontend'],
    },
    {
      id: 'html',
      name: 'HTML',
      description: 'Markup Language',
      tags: ['frontend'],
    },
    {
      id: 'pug',
      name: 'Pug',
      description: 'Markup Language',
      tags: ['frontend'],
    },
    {
      id: 'css',
      name: 'CSS',
      description: 'Style Sheet Language',
      tags: ['frontend'],
    },
    {
      id: 'scss',
      name: 'SCSS',
      description: 'Style Sheet Language',
      tags: ['frontend'],
    },
    {
      id: 'figma',
      name: 'Figma',
      description: 'Design Tool',
      tags: ['design'],
    },
    {
      id: 'bem',
      name: 'BEM',
      tags: ['frontend'],
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      description: 'CSS framework for responsive design.',
      tags: ['frontend'],
    },
    {
      id: 'nx',
      name: 'NX',
      description: 'Build System for Monorepos',
      tags: ['devops'],
    },
    {
      id: 'git',
      name: 'GIT',
      description: 'Version Control System',
      tags: ['devops'],
    },
    {
      id: 'gitlab',
      name: 'Gitlab',
      description: 'Code collaboration and automation',
      tags: ['devops'],
    },
    {
      id: 'github',
      name: 'Github',
      description: 'Code collaboration and automation',
      tags: ['devops'],
    },
    {
      id: 'eslint',
      name: 'Eslint',
      description: 'Code linting tool',
      tags: ['devops'],
    },
    {
      id: 'prettier',
      name: 'Prettier',
      tags: ['devops'],
    },
    {
      id: 'webpack',
      name: 'Webpack',
      description: 'Build Tool',
      tags: ['devops'],
    },
    {
      id: 'rollup',
      name: 'Rollup',
      tags: ['devops'],
    },
    {
      id: 'babel',
      name: 'Babel',
      description: 'Compiler',
      tags: ['devops'],
    },
    {
      id: 'gulp',
      name: 'Gulp',
      tags: ['devops'],
    },
    {
      id: 'npm',
      name: 'Npm',
      description: 'Package Manager',
      tags: ['devops'],
    },
    {
      id: 'yarn',
      name: 'Yarn',
      description: 'Package Manager',
      tags: ['devops'],
    },
    {
      id: 'vuejs',
      name: 'Vue.js',
      description: 'Progressive JavaScript Framework',
      tags: ['frontend'],
    },
    {
      id: 'storybook',
      name: 'Storybook',
      description: 'UI component development environment',
      tags: ['frontend'],
    },
    {
      id: 'jest',
      name: 'Jest',
      tags: ['frontend'],
    },
    {
      id: 'vite',
      name: 'Vite',
      description: 'Build Tool',
      tags: ['devops'],
    },
    {
      id: 'expressjs',
      name: 'Express.js',
      description: 'back end web application framework',
      tags: ['backend'],
    },
    {
      id: 'postman',
      name: 'Postman',
      description: 'API development and testing tool',
      tags: ['backend'],
    },
    {
      id: 'docker',
      name: 'Docker',
      description: 'Containerization platform for applications',
      tags: ['devops'],
    },
    {
      id: 'restapi',
      name: 'REST API',
      description: 'Standard for web data interaction',
      tags: ['backend'],
    },
    {
      id: 'uxui',
      name: 'UI/UX',
      description: 'Design and user experience',
      tags: ['design'],
    },
    {
      id: 'php',
      name: 'PHP',
      description: 'Programming Language',
      tags: ['backend', 'language'],
    },
    {
      id: 'wordpress',
      name: 'WordPress',
      description: 'Web Content Management System',
      tags: ['frontend', 'backend'],
    },
    {
      id: 'joomla',
      name: 'Joomla',
      description: 'Web Content Management System',
      tags: ['frontend', 'backend'],
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      description: 'Document-oriented Database',
      tags: ['backend'],
    },
    {
      id: 'sql',
      name: 'SQL',
      description: 'Relational Database',
      tags: ['backend'],
    },
    {
      id: 'c',
      name: 'C/C++/C#',
      description: 'Relational Database',
      tags: ['backend', 'language'],
    },
  ],
};
