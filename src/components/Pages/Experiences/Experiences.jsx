import React from 'react';
import './Experience.css';
import logo from "../../../assets/ed-travel.jpg";
import logo1 from "../../../assets/reproductor.png";
import logo2 from "../../../assets/traductor.jpg";
import logo3 from "../../../assets/carrito.jpg";

export const Experiences = () => {
  return (
    <div className='containerExperiences'>
      <h2>Experiencia</h2>
      <h3>GitHub</h3>
      
      <div className="projectsContainer">
        <div className="projectCard">
          <img src={logo} alt="ed-travel" className="projectImage" />
          <h4>ed-travel</h4>
          <p>Proyecto del SENA sobre la estructura de una página web.</p>
          <a href="https://ed-travel-pi.vercel.app/" target="_blank" rel="noopener noreferrer">ver proyecto</a>
        </div>

        <div className="projectCard">
          <img src={logo1} alt="reproductor" className="projectImage" />
          <h4>Reproductor Música</h4>
          <p>Proyecto del SENA sobre un reproductor de música.</p>
          <a href="https://charming-beignet-69e83a.netlify.app/" target="_blank" rel="noopener noreferrer">ver proyecto</a>
        </div>

        <div className="projectCard">
          <img src={logo2} alt="traductor" className="projectImage" />
          <h4>Traductor</h4>
          <p>Proyecto del SENA sobre un traductor de ingles a español o viceversa.</p>
          <a href="https://legendary-jalebi-80917a.netlify.app/" target="_blank" rel="noopener noreferrer">ver proyecto</a>
        </div>

        <div className="projectCard">
          <img src={logo3} alt="carrito" className="projectImage" />
          <h4>Carrito de compras</h4>
          <p>Proyecto del SENA sobre un carrito de compras.</p>
          <a href="https://charming-beignet-69e83a.https://carrito-de-compras-ebon.vercel.app/.app/" target="_blank" rel="noopener noreferrer">ver proyecto</a>
        </div>
      </div>
    </div>
  );
};