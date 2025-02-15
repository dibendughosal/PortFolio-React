import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
      ],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="text-[#343d68] leading-[45px] text-[45px]">
      I am a <span ref={typedElement} className="text-[#4e45d5] font-[800]"></span>
    </div>
  );
};

export default TypingEffect;
