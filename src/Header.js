import NavButton from "./NavButton";

function Header() {
  return (
    <div>
      <nav className="flex items-center justify-center py-4">
        <NavButton name="Home" dir="localhost:3000"/>
        <NavButton name="About" dir="localhost:3000"/>
        <NavButton name="Projects" dir="localhost:3000"/>
        <NavButton name="Contact" dir="localhost:3000"/>
      </nav>
    </div>

  )
}

export default Header;