import React from "react";
import "./CardProjects.sass";
import Button from "../Button";

export default function CardProject({
  src,name,desc,href,url,
}) {
  return (
    <div className="content-card">
      <div className="card-project">
        <a href={href}>
          <img src={src} alt="Project" />
        </a>
        <h3>{name}</h3>
        <p className="paragrafo">{desc}</p>
        <div className="content-button">
          <Button
            name={"View Project"}
            href={href}
            target="_blank"
            class="external-link"
          />
          <a className="btn" href={url}>
            Ir ao Projeto
          </a>
        </div>
      </div>
    </div>
  );
}
