import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddVape from "./components/AddVape";
import Vapes from "./components/Vape/Vapes";
import About from "./components/About";
import VapeDetail from "./components/Vape/VapeDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddVape />} exact />
          <Route path="/vapes" element={<Vapes />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/vapes/:id" element={<VapeDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;