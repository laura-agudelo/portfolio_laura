import React from 'react';
import './Home.css';
import logo from '../../../assets/lau.jpg';

export const Home = () => {
  return (
    <div className='containerHome'>
      <h2 className="title">Inicio</h2>
      <div className="content">
      <div className="imageContainer">
          <img src={logo} alt="laura agudelo" className="profileImage" />
        </div>
        <div className="textContainer">
          <p>
            Hola, soy <strong>Laura Agudelo</strong>, Desarrolladora de software apasionada por las bases de datos 
            y el diseño de interfaces atractivas. Enfocada en optimizar y digitalizar procesos empresariales
             a través de soluciones tecnológicas innovadoras, mejorando la eficiencia y la experiencia del usuario.
          </p>
        </div>
        
      </div>
    </div>
  );
};