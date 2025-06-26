import { useEffect, type RefObject } from "react";

export default function useOutSideClick<T extends HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void
) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return document.addEventListener("mousedown", handleClick);
  }, [ref, callback]);
}
