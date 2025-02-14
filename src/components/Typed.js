import { useEffect, useRef } from "react";
import Typed from "Typed.js";

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
    <div>
      I am a <span ref={typedElement} className="text-blue-500"></span>
    </div>
  );
};

export default TypingEffect;
