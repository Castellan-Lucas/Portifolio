import React from "react";
import "../skills/skills.sass";
import Card from "../Card";

export default function Skills() {
  return (
    <div className="container-pai">
      <div className="container-skills">
        <div className="conteudo-skills">
          <Card nome1={"HTML5"} src="src/assets/Html.svg"/>
          <Card nome2={"REACT"} src="src/assets/react.svg" />
        </div>
        <div className="conteudo-skills">
          <Card nome3={"CSS3"} src3="src/assets/css.svg" />
          <Card nome4={"TAILWIND"} src4="src/assets/tw2.png" />
        </div>
        <div className="conteudo-skills">
          <Card nome5={"SASS"} src5="src/assets/sass.svg" />
          <Card nome6={"GIT"} src6="src/assets/git.svg" />
        </div>
        <div className="conteudo-skills">
          <Card nome7={"J.SCRIPT"} src7="src/assets/js.svg" />
          <Card nome8={"FIGMA"} src8="src/assets/figma.svg" />
        </div>
      </div>
    </div>
  );
}
