import { useState } from 'react';
import './App.css';
import { LoadinScreen } from './components/LoadingScreen' ;
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/section/MobileMenu';
import "./index.css";
import { Home } from './components/section/Home';
import { About } from './components/section/About';

function App() {
const [isLoaded, setIsLoaded] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadinScreen onComplete={() => setIsLoaded(true)} />}{" "}
        <div 
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-black text-gray-100`}
        >
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Home />
            <About/>
        </div>
    </>
  );  
}

export default App
