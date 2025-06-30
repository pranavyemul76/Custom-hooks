import { useEffect, useRef } from "react";

type InfiniteScrollOptions = {
  callback: () => void;
  threshold?: number;
  enabled?: boolean;
  loading: boolean;
};

export default function useInfiniteScroll<T extends HTMLElement>({
  callback,
  threshold = 100,
  enabled = true,
  loading,
}: InfiniteScrollOptions) {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    if (loading) return;
    if (!enabled || !containerRef.current) return;
    const container = containerRef.current;
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (!loading && scrollHeight - scrollTop - clientHeight <= threshold) {
        callback();
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [callback, threshold, enabled]);

  return containerRef;
}
