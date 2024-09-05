import { useState, useEffect } from 'react';

export const useDelayedRender = (delay = 1400) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return showContent;
};