import { useEffect, useRef } from "react";
import Typed from "typed.js"; 

const TypingEffect = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    if (typedElement.current) {
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
    }
  }, []);

  return (
    <div className="text-3xl">
      I am a <span ref={typedElement} className="text-blue-500 text-5xl"></span>
    </div>
  );
};

export default TypingEffect;
