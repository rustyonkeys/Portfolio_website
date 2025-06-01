export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(20,20,60,0.95)] z-50 flex flex-col items-center justify-center gap-8
        transition-all duration-300 ease-in-out md:hidden
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className={`absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer transition-opacity duration-300 z-50 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Close menu"
      >
        &times;
      </button>

      {/* Links */}
      <a
        href="#Home"
        onClick={() => setMenuOpen(false)}
        className="text-gray-300 text-2xl hover:text-white transition hover:scale-110"
      >
        Home
      </a>
      <a
        href="#Projects"
        onClick={() => setMenuOpen(false)}
        className="text-gray-300 text-2xl hover:text-white transition hover:scale-110"
      >
        Projects
      </a>
      <a
        href="#About"
        onClick={() => setMenuOpen(false)}
        className="text-gray-300 text-2xl hover:text-white transition hover:scale-110"
      >
        About
      </a>
      <a
        href="#Contact"
        onClick={() => setMenuOpen(false)}
        className="text-gray-300 text-2xl hover:text-white transition hover:scale-110"
      >
        Contact
      </a>
    </div>
  );
};
