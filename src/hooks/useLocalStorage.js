import { useState, useEffect } from 'react';

/**
 * Custom hook that syncs a state value with localStorage.
 * @param {string} key - The localStorage key.
 * @param {*} initialValue - The initial value if nothing is stored yet.
 * @returns {[*, Function]} - The stored value and a setter function.
 */
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('[useLocalStorage] Error reading from localStorage:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('[useLocalStorage] Error writing to localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
