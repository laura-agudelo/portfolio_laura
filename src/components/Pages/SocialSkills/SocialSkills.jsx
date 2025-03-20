import React from 'react';
import './SocialSkills.css';

export const SocialSkills = () => {
  return (
    <div className='containerSocialSkills'>
      <h2 className="title">Habilidades Sociales</h2>
      <ul className="skillsList">
        <li><strong>Trabajo en equipo:</strong> se me da bien la comunicación con demás desarrolladores haciendo que el ambiente de desarrollo sea más productivo y amigable.</li>
        <li><strong>Gestión de tiempos:</strong> Avanzo trabajos lo más rapido posible para no tener incovenientes y cumplo con los plazos de entrega.</li>
        <li><strong>Creatividad:</strong> Diseño y propongo ideas que mejoren la esperiencia de usuaurios.</li>
        <li><strong>Adaptabilidad:</strong> Aprendo y me ajusto rápidamente a nuevas tecnologías y metodologías.</li>
      </ul>
    </div>
  );
};

export default SocialSkills;
