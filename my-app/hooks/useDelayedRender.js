import { useState, useEffect, useCallback } from 'react';

export const useDelayedRender = (delay = 500) => {
  const [showContent, setShowContent] = useState(false);

  const startTimer = useCallback(() => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      requestIdleCallback(() => {
        setTimeout(() => {
          setShowContent(true);
        }, delay);
      });
    } else {
      setTimeout(() => {
        setShowContent(true);
      }, delay);
    }
  }, [delay]);

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  return showContent;
};