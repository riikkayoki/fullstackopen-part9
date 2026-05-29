import { useState } from 'react';

interface UseField {
  value: string;
  onChange: (value: string) => void;
  reset: () => void;
}

export const useField = (): UseField => {
  const [value, setValue] = useState('');

  return {
    value,
    onChange: setValue,
    reset: () => setValue(''),
  };
};
