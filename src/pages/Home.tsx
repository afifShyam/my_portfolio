import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

// Import local logos
import DartLogo from '../assets/dart-logo.png';
import FlutterLogo from '../assets/flutter-logo.png';

const Home: React.FC<{ scrollToPortfolio: () => void }> = ({ scrollToPortfolio }) => {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Hello, I'm Afif.",
          "I'm a Flutter Developer.",
          'I build amazing Web and Mobile Apps.',
        ],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a192f] to-[#15314b] text-center text-white px-6 pt-20"
    >
      <div className="max-w-4xl p-10 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
        <h1 className="text-7xl font-extrabold leading-tight mb-6">
          Welcome to{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            My<span className="text-blue-300"> Portfolio</span>
          </span>
        </h1>
        <h2 className="text-4xl font-medium mb-6">
          <span ref={typedRef}></span>
        </h2>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          Crafting high-performance web and mobile apps that stand out. Let's transform ideas into
          reality.
        </p>

        <button
          onClick={scrollToPortfolio}
          className="px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 
            rounded-xl text-lg font-medium shadow-xl transition-all transform hover:scale-105"
        >
          View Project →
        </button>

        {/* Logo Section */}
        <div className="flex justify-center space-x-12 mt-12">
          <div className="text-center">
            <img
              src={DartLogo}
              alt="Dart Logo"
              className="h-20 w-20 object-contain transition-transform transform hover:scale-110"
            />
            <p className="text-sm text-gray-400 mt-2">Dart</p>
          </div>

          <div className="text-center">
            <img
              src={FlutterLogo}
              alt="Flutter Logo"
              className="h-20 w-20 object-contain transition-transform transform hover:scale-110"
            />
            <p className="text-sm text-gray-400 mt-2">Flutter</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
