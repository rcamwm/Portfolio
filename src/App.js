import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";

function App() {
  return (
    <div class="bg" id="Home">
      <Header/>
      <div className={`
        pl-0 pr-0
        md:pl-4 md:pr-4
        lg:pl-4 lg:pr-4
        xl:pl-4 xl:pr-4
        2xl:pl-4 2xl:pr-4
      `}>
        <Home/>
        <div id="About"></div>
        <About/>
      </div>
      
    </div>
  );
}

export default App;