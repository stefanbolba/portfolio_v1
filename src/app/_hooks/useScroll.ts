import { useEffect, useRef } from "react";

interface UseSCrollProps {
  option: string;
  setOption: (value: string) => void;
  value: string;
}

const useScroll = (option: string, setOption: (value: string) => void, value: string) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setOption(value);
          } else {
            // console.log("out of view");
          }
        });
      });

      observer.observe(ref.current);
    }
  }, [value, ref, setOption]);

  const handleScroll = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return { ref, handleScroll };
};

export default useScroll;
