import React, { type ComponentProps, type ComponentType } from 'react';

import { EmailFilled } from '@/components/icons/mono/EmailFilled';
import { GithubFilled } from '@/components/icons/mono/GithubFilled';
import { Leetcode } from '@/components/icons/mono/Leetcode';
import { LinkedinBold } from '@/components/icons/mono/LinkedinBold';
import { TelegramFilled } from '@/components/icons/mono/TelegramFilled';
import { resume } from '@/data';

export type ContactsNavProps = ComponentProps<'nav'>;

const contacts: {
  Icon: ComponentType<{ className?: string }>;
  id: string;
  name: string;
  url: string;
}[] = [
  {
    Icon: TelegramFilled,
    id: 'telegram',
    name: 'telegram',
    url: resume.socials.telegram,
  },
  {
    Icon: LinkedinBold,
    id: 'linkedin',
    name: 'linkedin',
    url: resume.socials.linkedin,
  },
  {
    Icon: GithubFilled,
    id: 'github',
    name: 'github',
    url: resume.socials.github,
  },
  {
    Icon: Leetcode,
    id: 'leetcode',
    name: 'leetcode',
    url: resume.socials.leetcode,
  },
  {
    Icon: EmailFilled,
    id: 'email',
    name: resume.email,
    url: `mailto:${resume.email}`,
  },
];

export const ContactsNav = ({ ...props }: ContactsNavProps) => {
  return (
    <nav {...props}>
      <ul className="flex flex-wrap gap-3">
        {contacts.map(({ id, name, Icon, url }) => {
          return (
            <li className="flex items-center" key={id}>
              <a target="_blank" href={url} className="btn btn-icon-md btn-outline-muted group">
                <Icon aria-label={name} className="btn-s-icon" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
