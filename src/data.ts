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
    position: string;
    startedAt: string;
    endedAt?: string;
    description: string;
    skillIds: string[];
  }[];
  skills: {
    id: string;
    name: string;
    type: string;
  }[]
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
      id: 'magic-square',
      companyName: 'Magic Square',
      position: 'Senior Frontend Developer',
      startedAt: '',
      endedAt: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      skillIds: ['typescript', 'react']
    }
  ],
  skills: [
    {
      id: 'typescript',
      name: 'TypeScript',
      type: 'Programming Language',
    },
    {
      id: 'react',
      name: 'React',
      type: 'Library',
    }
  ]
}
