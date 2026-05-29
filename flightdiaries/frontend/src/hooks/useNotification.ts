import { useState } from 'react';

interface UseNotification {
  notification: string | null;
  notify: (message: string) => void;
}

export const useNotification = (timeoutMs = 5000): UseNotification => {
  const [notification, setNotification] = useState<string | null>(null);

  const notify = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), timeoutMs);
  };

  return { notification, notify };
};
