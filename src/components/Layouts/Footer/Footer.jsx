import React from 'react'
import "./Footer.css"
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

export const Footer = () => {
  return (
    <footer className="containerFooter">
      <nav>
        <ul className="footer-links">
          <li>
            <a href="https://wa.me/3117597157" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon"/> 
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/lauraa._.1309" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon"/>
            </a>
          </li>
          <li>
            <a href="mailto:lauramarianaa189@gmail.com">
              <FaEnvelope className="icon"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/laura-agudelo" target="_blank" rel="noopener noreferrer">
              <LuGithub className="icon"/> 
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}


