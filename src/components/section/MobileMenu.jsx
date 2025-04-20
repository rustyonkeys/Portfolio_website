
export const MobileMenu = ({menuOpen, setMenuOpen}) => {
    return(
        <div className={`fixed top-0 left w-full bg-[rgba(20,20, 60, 0.8)] z-40 flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out ${
            menuOpen 
            ? "h-screen opacity-100 pointer-events-auto" 
            : "h-0 opacity-0 pointer-events-none"} 
        `}>
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close menu">
                &times;
            </button>
                <a href="#Home"
                onClick={() => setMenuOpen(false)}
                className="text-grey-300 hover:text-white transition-colors hover:scale-110 "> 
                    Home </a>
                   
                <a href="#Projects"
                onClick={() => setMenuOpen(false)}
                className="text-grey-300 hover:text-white transition-colors hover:scale-110 "> 
                    Projects </a>
                    
                <a href="#About" 
                onClick={() => setMenuOpen(false)}
                className="text-grey-300 hover:text-white transition-colors hover:scale-110 "> 
                    Contact </a>
                   
                <a href="#Contact" 
                onClick={() => setMenuOpen(false)}
                className="text-grey-300 hover:text-white transition-colors hover:scale-110 "> 
                    About </a>
                    
        </div>
    );
};