import { useCallback, useEffect, useState } from 'react';

const useCopyToClipboard = ({ timeout }: { timeout?: number } = {}) => {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(
    async (value: string) => {
      if (!navigator?.clipboard) {
        console.warn('Clipboard not supported')

        return false
      }

      try {
        await navigator.clipboard.writeText(value)

        setCopiedValue(value);
        setIsCopied(true);

        return true;
      } catch (error) {
        console.warn('Copy failed', error)

        setCopiedValue(null);

        return false;
      }
    },
    [],
  );

  useEffect(() => {
    if (!timeout || timeout <= 0) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsCopied(false);
    }, timeout);

    return () => {
      clearInterval(timeoutId);
    };
  }, [isCopied, timeout]);

  return {
    isCopied,
    copiedValue,
    copyToClipboard,
  };
};

export default useCopyToClipboard;
