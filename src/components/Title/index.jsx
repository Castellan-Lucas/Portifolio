import React from 'react'
import '../Title/Title.sass'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";

export default function Title() {
  return (
    <div className="container-title">
      <h1>
        Ola, sou <br />
        Lucas Castellan
      </h1>

      <h3>Desenvolvedor Front-End</h3>

      <a>
        Lorem ipsum dolor sit amet consectetur adipisicing m modi
        repellendusnemo?
      </a>
      <div className="container-icons">
        <a className="icon-a" href="https://github.com/Castellan-Lucas">
          <FaGithubSquare className="icon" />
        </a>
        <a
          className="icon-a"
          href="https://www.linkedin.com/in/lucas-castellan-4a6b68238/"
        >
          <FaLinkedin className="icon" />
        </a>
      </div>
    </div>
  );
}
 