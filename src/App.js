import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Página de Inicio</h1>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
