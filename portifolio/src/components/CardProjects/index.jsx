import React from "react";
import "./CardProjects.sass";
import Button from "../Button";

export default function CardProject({
  src,src1,src2,src3,
  name,name1,name2, name3,
  desc,desc1,desc2,desc3,
  href,href1,href2,href3,
  url,url1,url2,url3,
}) {
  return (
    <div className="content-card">
      <div className="card-project">
        <a href={href || href1 || href2 }>
          <img src={src || src1 || src2 } alt="Project" />
        </a>
        <h3>{name || name1 || name2 || name3}</h3>
        <p className="paragrafo">{desc || desc1 || desc2 }</p>
        <div className="content-button">
          <Button
            name={"View Project"}
            href={href || href1 || href2 }
          />
          <a className="btn" href={url || url1 || url2 }>
            Ir ao Projeto
          </a>
        </div>
      </div>
    </div>
  );
}
