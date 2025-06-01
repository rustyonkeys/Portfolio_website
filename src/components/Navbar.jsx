import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-blue backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#Home" className="font-mono text-xl text-white">
            Shreyas Shetty
          </a>

          {/* Hamburger Icon */}
          <div 
          className={`w-7 h-5 relative cursor-pointer z-50 md:hidden transition-opacity duration-300 ${
            menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
            </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors hover:scale-110"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors hover:scale-110"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors hover:scale-110"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors hover:scale-110"
            >
              Contact
            </a>
            <a
              href="#socials"
              className="text-gray-300 hover:text-white transition-colors hover:scale-110"
            >
              Social
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
