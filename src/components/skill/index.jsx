import React from "react";
import "./skill.sass";

export default function Skil(props) {
  return (
    <div>
      <div id={props.id} className="container-center">
        <div  className="container-skill">
          <h1>SKILLS</h1>
        </div>
      </div>
      <div className="container-sub-gl">
          <div className="container-sub">
        <h1>USING NOW: </h1>
      </div>
      </div>
    </div>
  );
    
}
