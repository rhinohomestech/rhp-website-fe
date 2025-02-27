"use client"; 

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./LoadingBar.scss"; 

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname(); 

  useEffect(() => {
    window.scrollTo(0, 0);
    setProgress(0); 
  }, [pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-loading-container">
      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default LoadingBar;
