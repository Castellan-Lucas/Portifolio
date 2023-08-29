import React from "react";
import "../skills/skills.sass";
import Card from "../Card";

export default function Skills() {
  return (
    <div className="container-pai">
      <div className="container-skills">
        <div className="conteudo-skills">
          <Card nome={"HTML5"} src="src/assets/html.svg"/>
          <Card nome={"REACT"} src="src/assets/react.svg" />
        </div>
        <div className="conteudo-skills">
          <Card nome={"CSS3"} src="src/assets/css.svg" />
          <Card nome={"TAILWIND"} src="src/assets/tw2.png" />
        </div>
        <div className="conteudo-skills">
          <Card nome={"SASS"} src="src/assets/sass.svg" />
          <Card nome={"GIT"} src="src/assets/git.svg" />
        </div>
        <div className="conteudo-skills">
          <Card nome={"J.SCRIPT"} src="src/assets/js.svg" />
          <Card nome={"FIGMA"} src="src/assets/figma.svg" />
        </div>
      </div>
    </div>
  );
}
