import React from 'react'
import '../CardLearning/CardLearning.sass'

export default function CardLearning({
  src,nome
}) {
  return (
    <div>
      <div className="container-">
        <div className="box-">
          <div className="content-">
            <img
              src={src}
              alt="Imagem"
            />
          </div>
        </div>
        <p className="nomes-">
          {nome}
        </p>
      </div>
    </div>
  );
}