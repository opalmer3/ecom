"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

type LazyComponent = {
  children: React.JSX.Element;
  delay?: number;
};

function LazyWrap({ children, delay = 0 }: LazyComponent) {
  const intersectionOptions = {
    threshold: 0,
    triggerOnce: Boolean(delay === 0),
    delay,
    trackVisibility: Boolean(delay > 0),
  };
  const [componentRef, inView] = useInView(intersectionOptions);
  return <span ref={componentRef}>{inView ? children : null}</span>;
}

export default LazyWrap;
