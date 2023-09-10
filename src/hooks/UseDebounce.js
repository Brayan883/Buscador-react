import { useState } from "react";
import { useEffect } from "react";

export const UseDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const SetText = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(SetText);
    };
  }, [value, delay]);

  return debouncedValue;
};
