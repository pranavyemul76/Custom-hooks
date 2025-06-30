import { useState, useEffect } from "react";

/**
 * Debounce hook with optional loading state
 * @param value The value to debounce
 * @param delay Delay in ms (default: 500)
 * @param enableLoading Enable loading state (default: false)
 * @returns [debouncedValue, loading?]
 */
function useDebounce<T>(value: T, delay?: number): [T];
function useDebounce<T>(
  value: T,
  delay: number,
  enableLoading: true
): [T, boolean];

function useDebounce<T>(
  value: T,
  delay: number = 500,
  enableLoading: boolean = false
): [T] | [T, boolean] {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (enableLoading) setLoading(true);

    const handler = setTimeout(() => {
      setDebouncedValue(value);
      if (enableLoading) setLoading(false);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay, enableLoading]);

  return enableLoading ? [debouncedValue, loading] : [debouncedValue];
}

export default useDebounce;
