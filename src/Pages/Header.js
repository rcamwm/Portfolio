import React from "react";
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Header() {
  // const currPath = useLocation().pathname;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <header className="nav-header">
      <nav className="flex items-center justify-center text-sm text-job-text font-jetbrains text-center">
        <Link to="#Home" className="hover:scale-105" onClick={() => scrollToSection('Home')}>Home</Link>
        <div className="pl-4 pr-4">·</div>

        <Link to="#About" className="hover:scale-105" onClick={() => scrollToSection('About')}>About</Link>
        <div className="pl-4 pr-4">·</div>

        <Link to="#Projects" className="hover:scale-105" onClick={() => scrollToSection('Projects')}>Projects</Link>
        <div className="pl-4 pr-4">·</div>

        <Link to="#Contact" className="hover:scale-105" onClick={() => scrollToSection('Contact')}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header;