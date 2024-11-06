import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { ComponentProps } from "react";
import { Check } from "../icons/mono/Check";
import { Copy } from "../icons/mono/Copy";
import clsx from "clsx";

interface CopyButtonProps extends ComponentProps<"button"> {
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
        "flex gap-2 relative text-sm transition-colors items-center overflow-hidden font-mono hover:text-text-primary text-text-tertiary flex-shrink-0",
        className
      )}
      {...props}
    >
      {label || value}
      <Copy
        aria-hidden="true"
        className={clsx(
          "w-4 h-4 transition-transform transform-gpu ease-in-out",
          {
            "-translate-y-full opacity-0": isCopied,
          }
        )}
      />

      <span
        aria-hidden="true"
        className={clsx(
          "absolute select-none flex h-full transform-gpu items-center shadow-[-10px_0_10px] shadow-bg-primary  rounded-full gap-2 right-0 text-success transition-transform ease-in-out bg-bg-primary",
          {
            "translate-y-full opacity-0": !isCopied,
          }
        )}
      >
        Copied!
        <Check className="w-4 h-4 transition-all" />
      </span>
    </button>
  );
};

export default CopyButton;
