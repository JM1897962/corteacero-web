import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nosotros from "./page/nosotros/nosotros";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Página de Inicio</h1>} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </Router>
  );
}

export default App;
