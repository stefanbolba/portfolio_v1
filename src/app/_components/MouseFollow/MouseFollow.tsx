"use client";
import { useRef, useEffect } from "react";

const MouseFollow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref || !ref.current) return;
    const el = ref.current;
    const onMouseMove = (e: MouseEvent) => {
      el.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div className="pointer-events-none fixed inset-0 z-30 transition duration-300" ref={ref} />;
};

export default MouseFollow;
