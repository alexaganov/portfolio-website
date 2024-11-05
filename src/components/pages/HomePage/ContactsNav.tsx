import { Check } from '@/components/icons/mono/Check';
import { Copy } from '@/components/icons/mono/Copy';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import clsx from 'clsx';
import React, { ComponentProps, ComponentType } from 'react'

export interface ContactsNavProps extends ComponentProps<"nav"> {
  items: {
    Icon: ComponentType<{ className?: string }>;
    id: string;
    name: string;
    url: string;
    copy?: string;
  }[]
}

const CopyButton = ({ value }: { value: string }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 1000 });

  const Icon = isCopied ? Check : Copy;

  return (
    <button
      onClick={() => {
        copyToClipboard(value);
      }}
      aria-label="Copy email"
      className={clsx(
        "size-9 flex items-center justify-center flex-shrink-0",
        {
          "text-text-tertiary hover:text-text-primary": !isCopied,
          "text-success": isCopied
        }
      )}
    >
      <Icon className="size-4" />
    </button>
  );
}

const ContactsNav = ({ items, ...props}: ContactsNavProps) => {
  return (
    <nav {...props}>
      <ul className="flex flex-wrap gap-3">
        {items.map(({ id, name, copy, Icon, url }) => {
          return (
            <li className='flex items-center gap-1' key={id}>
              <a
                target="_blank"
                href={url}
                className="gap-2.5 inline-flex items-center text-sm text-tertiary hover:text-primary hover:underline font-mono transition-colors"
              >
                <span aria-label={name} className='rounded-xl inline-flex border border-border-secondary size-9 items-center justify-center flex-shrink-0'>
                  <Icon className="size-4 " />
                </span>

                {copy}
              </a>

              {copy && (
                <CopyButton value={copy} />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default ContactsNav