import React from "react";
import skillsData from "./skiils.json";
import "../skills/skills.sass";
import Card from "../Card";

export default function Skills() {
  return (
    <div className="container-pai">
      <div className="container-skills">
        {skillsData.skills.map((skill) => (
          <div className="conteudo-skills" key={skill.nome}>
            <Card nome={skill.nome} src={skill.src} />
          </div>
        ))}
      </div>
    </div>
  );
}
