import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Hello, I'm Afif!<br />Welcome to My Portfolio!"],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <h1 className="text-6xl font-extrabold">
          <span ref={typedRef}></span>
        </h1>
        <p className="text-xl mt-4">Flutter & React Developer 🚀</p>
      </div>
    </div>
  );
};

export default Hero;
