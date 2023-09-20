import NavButton from "./NavButton";

function Header() {
  return (
    <div>
      <nav className="flex items-center justify-center py-4">
        <NavButton name="Home" dir="localhost:3000"/>
        <div class="w-4 h-3 border border-transparent bg-black bg-opacity-60"/>
        <NavButton name="About" dir="localhost:3000"/>
        <div class="w-4 h-3 border border-transparent bg-black bg-opacity-60"/>
        <NavButton name="Projects" dir="localhost:3000"/>
        <div class="w-4 h-3 border border-transparent bg-black bg-opacity-60"/>
        <NavButton name="Contact" dir="localhost:3000"/>
      </nav>
    </div>
  )
}

export default Header;