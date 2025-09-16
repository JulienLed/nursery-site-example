"use client";

import { useState, useEffect } from "react";

export const useWidthScreen = () => {
  const [screenWidth, setScreenWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};
