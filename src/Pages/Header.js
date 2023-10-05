function Header(props) {
  const { jumpTo } = props;
  
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