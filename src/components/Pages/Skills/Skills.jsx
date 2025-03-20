import React from 'react'
import { FaJava, FaHtml5 } from "react-icons/fa";
import './Skills.css'
import { LiSkills } from '../../Ui/LiSkills';


export const Skills = () => {
  return (
    <div className='containerSkills'>
      <h2 className='tittleSkills'>Habilidades</h2>
      <LiSkills/>
    </div>
  )
}