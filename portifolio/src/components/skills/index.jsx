import React from "react";
import "../skills/skills.sass";
import Card from "../Card";

export default function Skills() {
  return (
    <div className="container-pai">
      <div className="container-skills">
        <div className="conteudo-skills">
          <Card nome1={"HTML5"} src={"../public/icons/Html.svg"} />
          <Card nome2={"REACT"} src="../public/icons/react.svg" />
        </div>
        <div className="conteudo-skills">
          <Card nome3={"CSS3"} src3="../public/icons/css.svg" />
          <Card nome4={"TAILWIND"} src4="../public/icons/tw2.png" />
        </div>
        <div className="conteudo-skills">
          <Card nome5={"SASS"} src5="../public/icons/sass.svg" />
          <Card nome6={"GIT"} src6="../public/icons/git.svg" />
        </div>
        <div className="conteudo-skills">
          <Card nome7={"J.SCRIPT"} src7="../public/icons/js.svg" />
          <Card nome8={"FIGMA"} src8="../public/icons/figma.svg" />
        </div>
      </div>
    </div>
  );
}
