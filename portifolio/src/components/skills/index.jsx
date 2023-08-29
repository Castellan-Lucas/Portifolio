import React from "react";
import "../skills/skills.sass";
import Card from "../Card";

export default function Skills() {
  return (
    <div className="container-pai">
      <div className="container-skills">
        <div className="conteudo-skills">
          <Card nome1={"HTML5"} src={"../public/img/Html.svg"} />
          <Card nome2={"REACT"} src="../public/img/react.svg" />
        </div>
        <div className="conteudo-skills">
          <Card nome3={"CSS3"} src3="../public/img/css.svg" />
          <Card nome4={"TAILWIND"} src4="../public/img/tw2.png" />
        </div>
        <div className="conteudo-skills">
          <Card nome5={"SASS"} src5="../public/img/sass.svg" />
          <Card nome6={"GIT"} src6="../public/img/git.svg" />
        </div>
        <div className="conteudo-skills">
          <Card nome7={"J.SCRIPT"} src7="../public/img/js.svg" />
          <Card nome8={"FIGMA"} src8="../public/img/figma.svg" />
        </div>
      </div>
    </div>
  );
}
