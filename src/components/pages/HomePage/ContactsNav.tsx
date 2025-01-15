import React, { ComponentProps, ComponentType } from "react";

export interface ContactsNavProps extends ComponentProps<"nav"> {
  items: {
    Icon: ComponentType<{ className?: string }>;
    id: string;
    name: string;
    url: string;
  }[];
}

const ContactsNav = ({ items, ...props }: ContactsNavProps) => {
  return (
    <nav {...props}>
      <ul className="flex flex-wrap gap-3">
        {items.map(({ id, name, Icon, url }) => {
          return (
            <li className="flex items-center" key={id}>
              <a
                target="_blank"
                href={url}
                className="btn btn-icon-md btn-outline-muted"
              >
                <Icon aria-label={name} className="btn-s-icon" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ContactsNav;
