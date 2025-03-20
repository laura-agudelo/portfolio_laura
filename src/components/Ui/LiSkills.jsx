import React from "react";
import { FaHtml5, FaCss3, FaReact, FaJava,} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { SiOracle } from "react-icons/si";
import '../Pages/Skills/Skills.css'

import { Askills } from "./Askills"; 

export const LiSkills = () => {
  return (
    <ul className="liSkills">
      <Askills className="iconSkills" name={FaHtml5} title="Html" /> 
      <Askills className="iconSkills" name={FaCss3 } title="Css" /> 
      <Askills className="iconSkills" name={FaReact} title="React" /> 
      <Askills className="iconSkills" name={FaJava} title="Java" /> 
      <Askills className="iconSkills" name={IoLogoJavascript} title="JavaScript" /> 
      <Askills className="iconSkills" name={SiMongodb} title="MongoDB" /> 
      <Askills className="iconSkills" name={GrMysql} title="MySql" /> 
      <Askills className="iconSkills" name={FaGithub} title="GitHub" /> 
      <Askills className="iconSkills" name={SiOracle} title="Oracle" /> 

    </ul>
    
    
  );
};
