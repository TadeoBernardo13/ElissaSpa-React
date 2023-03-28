import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import App from "./pages/App";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Cursos from "./pages/Cursos";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Cursos" element={<Cursos />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);
