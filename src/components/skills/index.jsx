import React from "react";
import "../skills/skills.sass";
import Card from "../Card";

function Skills() {
  return (
    <div className="container-pai">
      <div className="container-skills">
        <div className="conteudo-skills">
          <Card nome={"HTML5"} src="assets/svg/html.svg" />
          <Card nome={"REACT"} src="assets/svg/react.svg" />
        </div>
        <div className="conteudo-skills">
          <Card nome={"CSS3"} src="assets/svg/css.svg" />
          <Card nome={"TAILWIND"} src="assets/img/tw2.png" />
        </div>
        <div className="conteudo-skills">
          <Card nome={"SASS"} src="assets/svg/sass.svg" />
          <Card nome={"GIT"} src="assets/svg/git.svg" />
        </div>
        <div className="conteudo-skills">
          <Card nome={"J.SCRIPT"} src="assets/svg/js.svg" />
          <Card nome={"FIGMA"} src="assets/svg/figma.svg" />
        </div>
      </div>
    </div>
  );
}
export default Skills;
