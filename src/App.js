import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import ANNimator from "./Pages/ANNimator";

function App() {
  const currPath = useLocation().pathname;

  const jumpTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (currPath === "/" && window.innerWidth >= 769) {
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
    <div className="App">
      <Routes>

        <Route path="/" element={
          <div className="main-bg">
            <Header jumpTo={jumpTo}/>
            <div id="Home"><Home/></div>
            <div id="About"><About jumpTo={jumpTo}/></div>
            <div id="Projects"><Projects/></div>
            <div id="Contact"><Contact/></div>
          </div>
        } />

        <Route path="/ANNimator" element={
          <div className="proj-bg">
            <Header jumpTo={jumpTo}/>
            <ANNimator/>
          </div>
        } />

        {/* <Route path="/Art" element={
          <div className="main-bg">
            <Header jumpTo={jumpTo}/>
            
          </div>
        } /> */}

      </Routes>
    </div>
  );
}

export default App;