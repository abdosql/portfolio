'use client';

import { useEffect, useState } from 'react';
import BackgroundAnimation from './BackgroundAnimation';

const BackgroundLayout = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <BackgroundAnimation />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundLayout;