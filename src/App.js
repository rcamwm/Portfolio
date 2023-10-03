import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/MainPage/Home";
import About from "./Pages/MainPage/About";
import Projects from "./Pages/MainPage/Projects";
import Contact from "./Pages/MainPage/Contact";
import ANNimator from "./Pages/ProjectPages/ANNimator";

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={
          <div className="main-bg">
            <Header/>
            <div id="Home"><Home/></div>
            <div id="About"><About/></div>
            <div id="Projects"><Projects/></div>
            <div id="Contact"><Contact/></div>
          </div>
        } />

        <Route path="/ANNimator" element={
          <div className="proj-bg">
            <Header/>
            <ANNimator/>
          </div>
        } />

      </Routes>
    </div>
  );
}

export default App;