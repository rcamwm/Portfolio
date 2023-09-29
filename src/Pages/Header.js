import { useLocation } from 'react-router-dom';


function Header() {
  const currPath = useLocation().pathname;

  const jumpTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (currPath === "/") {
      section.scrollIntoView({
        behavior: 'smooth',
      });
      window.history.pushState({}, "", `/#${sectionId}`); // Change URL without redirect
    }
    else {
      window.location.href = `/#${sectionId}`; // Change URL with redirect
    }
  };
  
  return (
    <header className="nav-header">
      <nav className="flex items-center justify-center text-sm text-job-text font-jetbrains text-center">
        
        <button className="hover:scale-105" onClick={() => jumpTo('Home')}>Home</button>
        <div className="pl-4 pr-4">·</div>

        <button className="hover:scale-105" onClick={() => jumpTo('About')}>About</button>
        <div className="pl-4 pr-4">·</div>

        <button className="hover:scale-105" onClick={() => jumpTo('Projects')}>Projects</button>
        <div className="pl-4 pr-4">·</div>

        <button className="hover:scale-105" onClick={() => jumpTo('Contact')}>Contact</button>
      </nav>
    </header>
  )
}

export default Header;