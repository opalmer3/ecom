"use client";

import { useEffect, useState } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

const breakpointValues: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useIsBreakpoint(breakpoint: Breakpoint) {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsBreakpoint(window.innerWidth < breakpointValues[breakpoint]);
    };

    // Check on mount
    checkBreakpoint();

    // Add resize listener
    window.addEventListener("resize", checkBreakpoint);

    return () => {
      window.removeEventListener("resize", checkBreakpoint);
    };
  }, [breakpoint]);

  return isBreakpoint;
}
