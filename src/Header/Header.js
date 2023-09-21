// import NavButton from "./NavButton";

function Header() {
  return (
    <header className="sticky z-10 top-0 w-full bg-black">
      <nav className="flex items-center justify-center text-sm text-job-text font-jetbrains text-center">
        <a href="localhost:3000">Home</a>
        <div className="pl-4 pr-4">·</div>
        <a href="localhost:3000">About</a>
        <div className="pl-4 pr-4">·</div>
        <a href="localhost:3000">Projects</a>
        <div className="pl-4 pr-4">·</div>
        <a href="localhost:3000">Contact</a>
      </nav>
    </header>
  )
}

export default Header;