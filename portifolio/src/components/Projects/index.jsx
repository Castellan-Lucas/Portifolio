import React from "react";
import "../Projects/Projects.sass";
import CardProject from "../CardProjects";

export default function Projects() {
  return (
    <div className="container-projects">
      <h1>Projetos</h1>
      <div className="card-container">
        <CardProject
          src={"src/assets/img/alspace-img.png"}
          name={"Alura-space"}
          desc={
            "Projeto desenvolvido com React.jsx, Next.js,Styled-components, SASS e Framer-motion. Esta que fornece ao usuario uma experiencia de navegação e visualização de planetas e galaxias, podendo filtralas conforme seu interesse."
          }
          href={"https://alura-space-gilt.vercel.app/"}
          url={"https://github.com/Castellan-Lucas/Alura-space"}
        />

        <CardProject
          src1={"src/assets/img/organo.png"}
          name1={"Organo"}
          desc1={
            "Aplicação densenvolvida com React.js, componentes reutilizaveis, Styled-components, e Framer-motion. Com o objetivo de fornecer ao usuario uma ferramenta para organizar sua equipe de desenvolvimento de software."
          }
          href={"https://organo-mu-eight.vercel.app/ "}
          url1={"https://github.com/Castellan-Lucas/Organo"}
        />
      </div>
      <div className="card-container-">
        <CardProject
          src2={"src/assets/img/short-img.png"}
          name2={"Shortly"}
          desc2={
            "Esta aplicação foi desenvolvida com React.jsx, Sass, Context-api, componentes reutilizaveis. Com o objetivo de fornecer ao usuario uma ferramenta para encurtar links atravéz de uma API externa."
          }
          href={"https://link-shortener-dc15.vercel.app/"}
          url2={"https://github.com/Castellan-Lucas/link-shortener"}
        />

        {/* <CardProject
          src3={"src/assets/cartao-img.png"}
          name3={"Cartao Interativo"}
          desc3={""}
          href={""}
          url3={""}
        /> */}
      </div>
    </div>
  );
}
