import Header from "./Header";
import Home from "./MainPage/Home";
import About from "./MainPage/About";
import Projects from "./MainPage/Projects";
import Contact from "./MainPage/Contact";

function MainPage() {
  return (
    <div className="main-bg">
      <Header/>
      <div id="Home"><Home/></div>
      <div id="About"><About/></div>
      <div id="Projects"><Projects/></div>
      <div id="Contact"><Contact/></div>
    </div>
  )
}

export default MainPage;