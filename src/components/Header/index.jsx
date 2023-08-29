import React from 'react'
import '../Header/Header.sass'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">LC<a>.</a></div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Resumo</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
