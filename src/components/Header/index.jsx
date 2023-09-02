import React from "react";
import "../Header/Header.sass";


export default function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        LC<a className="ponto">.</a>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <button
              className="button-a"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="button-a"
              onClick={() => scrollToSection("projetos")}
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              className="button-a"
              onClick={() => scrollToSection("resumo")}
            >
              Resumo
            </button>
          </li>
          <li>
            <button
              className="button-a"
              onClick={() => scrollToSection("skil")}
            >
              Skils
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
