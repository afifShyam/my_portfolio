const About: React.FC = () => (
  <div className="container mx-auto px-5 py-28">
    <h2 className="text-6xl font-extrabold text-center mb-16 text-white leading-tight">About Me</h2>

    <div className="relative flex justify-center">
      <div className="max-w-5xl bg-white/5 backdrop-blur-lg border border-white/10 p-12 rounded-3xl shadow-2xl text-center">
        <p className="text-xl leading-relaxed text-gray-300 mb-12">
          🚀 I'm a <span className="font-semibold text-blue-400">Flutter and React Developer</span>{' '}
          passionate about crafting modern mobile experiences. With over{' '}
          <span className="text-blue-400">1 year of experience</span> in mobile development, I
          specialize in turning innovative ideas into high-quality apps using
          <span className="font-semibold text-blue-400"> Flutter, Firebase, and BLoC</span>. I excel
          at collaborating with teams, optimizing performance, and delivering seamless user
          experiences.
        </p>

        {/* Grid for Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
          <div className="hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-400">Education 🎓</h3>
            <p className="text-gray-300 mt-4">
              B.Sc. Computer Science
              <span className="block text-sm text-gray-400">UiTM Kampus Terengganu</span>
            </p>
          </div>

          <div className="hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-400">Experience 💼</h3>
            <p className="text-gray-300 mt-4">
              Mobile Developer
              <span className="block text-sm text-gray-400">RF Infinite Sdn. Bhd.</span>
            </p>
          </div>

          <div className="hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-400">Achievements 🏆</h3>
            <p className="text-gray-300 mt-4">
              Flood Prediction App (90%)
              <span className="block text-sm text-gray-400">Final Year Project</span>
            </p>
          </div>
        </div>

        {/* Links to GitHub and LinkedIn */}
        <div className="flex justify-center mt-16 space-x-10">
          <a
            href="https://github.com/afifShyam"
            target="_blank"
            className="flex items-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold shadow-lg transform hover:scale-105 transition-all"
          >
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/afif-shyamsul-1333bb279/"
            target="_blank"
            className="flex items-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold shadow-lg transform hover:scale-105 transition-all"
          >
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
