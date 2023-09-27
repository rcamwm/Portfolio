import React from "react";
import Header from "./PageSections/Header";
import Home from "./PageSections/Home";
import About from "./PageSections/About";
import Projects from "./PageSections/Projects";
import Contact from "./PageSections/Contact";

function App() {
  const lrPadding = `
    h-screen relative
    pl-0 pr-0
    md:pl-4 md:pr-4
    lg:pl-4 lg:pr-4
    xl:pl-6 xl:pr-6
    2xl:pl-8 2xl:pr-8
  `

  const blankSpace = `
    mt-4
    md:mt-8
    lg:mt-16
    xl:mt-16
    2xl:mt-16
  `

  return (
    <div className="bg">
      <Header/>

      <div id="Home"/>
      <div className={blankSpace}/>
      <Home lrPadding={lrPadding}/>
      
      <div id="About"/>
      <div className={blankSpace}/>
      <About lrPadding={lrPadding}/>

      <div id="Projects"/>
      <div className={blankSpace}/>
      <Projects lrPadding={lrPadding}/>

      <div id="Contact"/>
      <div className={blankSpace}/>
      <Contact lrPadding={lrPadding}/>
    </div>
      
  );
}

export default App;