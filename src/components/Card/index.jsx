import React from "react";
import "../Card/Card.sass";

export default function Card({
  src,
  nome,
}) {
  return (
    <div>
      <div className="container">
        <div className="box">
          <div className="content">
            <img src={src} alt="Imagem" />
          </div>
        </div>
        <p className="nomes">{nome}</p>
      </div>
    </div>
  );
}
