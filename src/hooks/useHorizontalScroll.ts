import { useRef } from "react";

export const useHorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right", scrollAmount?: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const amount = scrollAmount ?? container.clientWidth;
      container.scrollBy({
        left: direction === "right" ? amount : -amount,
        behavior: "smooth",
      });
    }
  };

  return { scrollRef, scroll };
};
