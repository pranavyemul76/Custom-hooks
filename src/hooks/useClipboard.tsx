import { useCallback, useState } from "react";

type UseClipboardReturn = [boolean, (text: string) => void];

/**
 * Custom React hook to copy text to clipboard.
 *
 * @returns { copied, copy } - `copied` is a boolean that becomes true when text is copied.
 *                             `copy` is a function that takes a string and copies it.
 */
export function useClipboard(): UseClipboardReturn {
  const [copied, setCopied] = useState(false);

  const copy = useCallback((text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }, []);

  return [copied, copy];
}
