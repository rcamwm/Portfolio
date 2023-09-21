import React from "react";

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <header className="sticky z-10 top-0 w-full bg-black">
      <nav className="flex items-center justify-center text-sm text-job-text font-jetbrains text-center">
        
        <button onClick={() => scrollToSection('Home')}>Home</button>
        <div className="pl-4 pr-4">·</div>

        <button onClick={() => scrollToSection('About')}>About</button>
        <div className="pl-4 pr-4">·</div>

        <button onClick={() => scrollToSection('Projects')}>Projects</button>
        <div className="pl-4 pr-4">·</div>

        <button onClick={() => scrollToSection('Contact')}>Contact</button>
      </nav>
    </header>
  )
}

export default Header;