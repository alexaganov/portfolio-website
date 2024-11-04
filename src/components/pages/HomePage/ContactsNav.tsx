import React, { ComponentProps, ComponentType } from 'react'

export interface ContactsNavProps extends ComponentProps<"nav"> {
  items: {
    Icon: ComponentType<{ className?: string }>;
    id: string;
    name: string;
    url: string;
  }[]
}

const ContactsNav = ({ items, ...props}: ContactsNavProps) => {
  return (
    <nav {...props}>
      <ul className="flex flex-wrap-reverse gap-x-6 gap-y-1.5">
        {items.map(({ id, name, Icon, url }) => {
          return (
            <li key={id}>
              <a
                target="_blank"
                href={url}
                className="gap-2.5 inline-flex text-sm text-tertiary hover:text-primary hover:underline font-mono transition-colors"
              >
                <Icon className="size-5 flex-shrink-0" />
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default ContactsNav