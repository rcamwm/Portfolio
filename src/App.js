import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";

function App() {
  const lrPadding = `
    pl-0 pr-0
    md:pl-4 md:pr-4
    lg:pl-4 lg:pr-4
    xl:pl-4 xl:pr-4
    2xl:pl-4 2xl:pr-4
  `

  const blankSpace = `
    mt-4
    md:mt-8
    lg:mt-16
    xl:mt-16
    2xl:mt-16
  `

  return (
    <div class="bg">
      <Header/>

      <div id="Home"/>
      <div className={blankSpace}/>
      <Home lrPadding={lrPadding}/>

      <div id="About"/>
      <div className={blankSpace}/>
      <About lrPadding={lrPadding}/>
    </div>
      
  );
}

export default App;