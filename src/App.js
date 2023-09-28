import React /*, {useState}*/ from "react";
import Header from "./PageSections/Header";
import Home from "./PageSections/Home";
import About from "./PageSections/About";
import Projects from "./PageSections/Projects";
import Contact from "./PageSections/Contact";

function App() {
  return (
    <div className="bg">
      <Header/>
      <div id="Home"><Home/></div>
      <div id="About"><About/></div>
      <div id="Projects"><Projects/></div>
      <div id="Contact"><Contact/></div>
    </div>  
  );
}

export default App;