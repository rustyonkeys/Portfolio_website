import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {
    
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return(
        <nav className="fixed top-0 w-full z-40 bg-[rgba(20,20, 60, 0.8)] backdrop-blur-lg border-b border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#Home" className="font-mono text-xl text-white"> 
                    Shreyas Shetty
                    </a>
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>  
                       &#9776; 
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#Home" className="text-grey-300 hover:text-white transition-colors hover:scale-110 "> 
                            Home </a>
                    </div>

                    
                    
                        <a href="#Projects" className="text-grey-300 hover:text-white transition-colors hover:scale-110 "> 
                            Projects </a>
                    

                    
                   
                        <a href="#About" className="text-grey-300 hover:text-white transition-colors hover:scale-110 "> 
                            Contact </a>
                    

                    
                    
                        <a href="#Contact" className="text-grey-300 hover:text-white transition-colors hover:scale-110 "> 
                            About </a>
                    
                </div>
            </div>
        </nav>
    )
}