import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Test from "./Pages/ProjectPages/test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/Test" element={<Test/>} />
      </Routes>
    </div>
  );
}

export default App;