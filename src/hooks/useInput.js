import { useState } from 'react';

/**
 * Custom hook that manages a controlled input field.
 * @param {string} initialValue - The initial value of the input.
 * @returns {{ value: string, onChange: Function, reset: Function }}
 */
function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  function onChange(e) {
    setValue(e.target.value);
  }

  function reset() {
    setValue(initialValue);
  }

  return { value, onChange, reset };
}

export default useInput;
