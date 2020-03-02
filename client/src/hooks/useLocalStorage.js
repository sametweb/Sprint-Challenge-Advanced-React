import { useState } from "react";

export const useLocalStorage = (key, value = []) => {
  const [storedValue, setStoredValue] = useState(() => {
    const storage = window.localStorage.getItem(key);
    return storage ? JSON.parse(storage) : value;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
