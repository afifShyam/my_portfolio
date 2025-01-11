interface NavbarProps {
  scrollToHome: () => void;
  scrollToPortfolio: () => void;
  scrollToAbout: () => void;
  scrollToContact: () => void;
  activeSection: string;
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToHome,
  scrollToPortfolio,
  scrollToAbout,
  scrollToContact,
  activeSection,
  scrolled,
}) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 ${
        scrolled ? 'bg-[#0a1e3f] shadow-lg' : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-3xl font-bold cursor-pointer" onClick={scrollToHome}>
          Afif's Portfolio
        </div>
        <div className="space-x-10">
          <button
            onClick={scrollToHome}
            className={`text-lg ${activeSection === 'home' ? 'text-blue-400' : 'text-white'}`}
          >
            Home
          </button>
          <button
            onClick={scrollToPortfolio}
            className={`text-lg ${activeSection === 'portfolio' ? 'text-blue-400' : 'text-white'}`}
          >
            Portfolio
          </button>
          <button
            onClick={scrollToAbout}
            className={`text-lg ${activeSection === 'about' ? 'text-blue-400' : 'text-white'}`}
          >
            About
          </button>
          <button
            onClick={scrollToContact}
            className={`text-lg ${activeSection === 'contact' ? 'text-blue-400' : 'text-white'}`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
