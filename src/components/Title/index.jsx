import React from 'react'
import '../Title/Title.sass'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";

export default function Title(props) {
  return (
    <div id={props.id} className="container-title">
      <div className='container-p'>
      <h1>
        Ola, sou <br />
        Lucas Castellan
      </h1>

      <h3>Desenvolvedor Front-End</h3>

      <a className='desc'>
        Saiba mais sobre minha jornada no mundo do desenvolvimento web e minhas paixões por criação de interfaces incríveis e experiências digitais envolventes.
      </a>
    </div>
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
 