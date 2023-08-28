import React from "react";
import "../Card/Card.sass";

export default function Card({
  src,
  src2,
  src3,
  src4,
  src5,
  src6,
  src7,
  src8,
  nome1,
  nome2,
  nome3,
  nome4,
  nome5,
  nome6,
  nome7,
  nome8,
}) {
  return (
    <div>
      <div className="container">
        <div className="box">
          <div className="content">
            <img
              src={src || src2 || src3 || src4 || src5 || src6 || src7 || src8}
              alt="Imagem"
            />
          </div>
        </div>
        <p className="nomes">
          {nome1 || nome2 || nome3 || nome4 || nome5 || nome6 || nome7 || nome8}
        </p>
      </div>
    </div>
  );
}
