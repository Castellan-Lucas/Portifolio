import React from "react";
import "../Footer/Footer.sass"; 
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <h4>Vamos nos conectar</h4>
          <p>Me envie um email, ou me chame em alguma dessas redes! </p>
        </div>
        <div className="footer-social-icons">
          <a href="https://www.instagram.com/lucascastelln/">
            <BsInstagram className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/lucas-castellan-4a6b68238/">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com/Castellan-Lucas">
            <FaGithubSquare className="icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Designed and coded by Lucas Castellan</p>
      </div>
    </footer>
  );
};

export default Footer;
