import clsx from 'clsx';
import { type ComponentProps } from 'react';

import useCopyToClipboard from '@/hooks/use-copy-to-clipboard';

import { Check } from '../icons/mono/check';
import { Copy } from '../icons/mono/copy';

interface CopyButtonProps extends ComponentProps<'button'> {
  value: string;
  label?: string;
}

const CopyButton = ({ className, label, value, ...props }: CopyButtonProps) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 1000 });

  return (
    <button
      onClick={() => {
        copyToClipboard(value);
      }}
      aria-label={`Copy "${value}"`}
      className={clsx(
        'flex gap-2 relative text-sm transition-colors items-center overflow-hidden font-mono cursor-pointer hover:text-text-primary text-text-tertiary shrink-0',
        className,
      )}
      {...props}
    >
      {label || value}
      <Copy
        aria-hidden="true"
        className={clsx('size-[0.95em] transition-transform transform-gpu ease-in-out', {
          '-translate-y-full opacity-0': isCopied,
        })}
      />

      <span
        aria-hidden="true"
        className={clsx(
          'absolute select-none flex h-full transform-gpu items-center shadow-[-10px_0_10px] shadow-bg-primary  rounded-full gap-2 right-0 text-success transition-transform ease-in-out bg-bg-primary',
          {
            'translate-y-full opacity-0': !isCopied,
          },
        )}
      >
        Copied!
        <Check className="size-[0.95em] transition-all" />
      </span>
    </button>
  );
};

export default CopyButton;
