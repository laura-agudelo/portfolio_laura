import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import "../../../index.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="containerHeader">
      {/* Título "My Portfolio" alineado a la izquierda */}
      <div className="logo">My Portfolio</div>

      {/* Botón de menú hamburguesa */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Contenedor del menú */}
      <div className={`nav-container ${menuOpen ? "open" : ""}`}>
        <nav className="nav-links">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => (isActive ? "active" : "")} 
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/skills" 
            end
            className={({ isActive }) => (isActive ? "active" : "")} 
            onClick={() => setMenuOpen(false)}
          >
            Habilidades
          </NavLink>
          <NavLink 
            to="/socialSkills" 
            end
            className={({ isActive }) => (isActive ? "active" : "")} 
            onClick={() => setMenuOpen(false)}
          >
            Habilidades Sociales
          </NavLink>
          <NavLink 
            to="/studies" 
            end
            className={({ isActive }) => (isActive ? "active" : "")} 
            onClick={() => setMenuOpen(false)}
          >
            Estudios
          </NavLink>
          <NavLink 
            to="/experiences" 
            end
            className={({ isActive }) => (isActive ? "active" : "")} 
            onClick={() => setMenuOpen(false)}
          >
            Experiencia
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
