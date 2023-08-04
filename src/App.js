import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { About, Contact } from "./components/About";
import HandlePost from "./components/HandlePost";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:post_id" element={<HandlePost />} />
      </Routes>
    </div>
  );
};

export default App;
