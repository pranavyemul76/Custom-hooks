import { useState, useEffect } from "react";

/**
 * Debounce hook with loading state
 * @param value The value to debounce
 * @param delay Delay in ms (default 500)
 * @returns [debouncedValue, loading]
 */
function useDebounceWithLoading<T>(value: T, delay = 500): [T, boolean] {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setLoading(false);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return [debouncedValue, loading];
}

export default useDebounceWithLoading;
