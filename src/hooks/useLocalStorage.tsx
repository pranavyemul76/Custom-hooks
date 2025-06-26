import { useState, useEffect } from "react";

function useLocalStorage<T = string>(key: string, initialValue: T) {
  const getStoredValue = (): T => {
    try {
      const item = localStorage.getItem(key);

      if (item === null) return initialValue;

      // Try parsing for objects, fallback to string
      try {
        return JSON.parse(item);
      } catch {
        return item as unknown as T;
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  const [value, setValue] = useState<T>(getStoredValue);

  useEffect(() => {
    try {
      const valueToStore =
        typeof value === "string" ? value : JSON.stringify(value);
      localStorage.setItem(key, valueToStore);
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  const updateValue = (newValue: T | ((prev: T) => T)) => {
    setValue((prev) =>
      typeof newValue === "function"
        ? (newValue as (val: T) => T)(prev)
        : newValue
    );
  };

  return [value, updateValue] as const;
}

export default useLocalStorage;
