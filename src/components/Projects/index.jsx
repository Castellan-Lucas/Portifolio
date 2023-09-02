import React from "react";
import "../Projects/Projects.sass";
import CardProject from "../CardProjects";

export default function Projects(props) {
  return (
    <div id={props.id} className="container-projects">
      <h1>Projetos</h1>
      <div className="card-container">
        <CardProject
          src={"assets/img/alspace-img.png"}
          name={"Alura-space"}
          desc={
            "Projeto desenvolvido com React.jsx, Next.js,Styled-components, SASS e Framer-motion. Esta que fornece ao usuario uma experiencia de navegação e visualização de planetas e galaxias, podendo filtralas conforme seu interesse."
          }
          href={"https://alura-space-gilt.vercel.app/"}
          url={"https://github.com/Castellan-Lucas/Alura-space"}
        />

        <CardProject
          src={"assets/img/organo.png"}
          name={"Organo"}
          desc={
            "Aplicação densenvolvida com React.js, componentes reutilizaveis, Styled-components, e Framer-motion. Com o objetivo de fornecer ao usuario uma ferramenta para organizar sua equipe de desenvolvimento de software."
          }
          href={"https://organo-mu-eight.vercel.app/ "}
          url={"https://github.com/Castellan-Lucas/Organo"}
        />
      </div>
      <div className="card-container-">
        <CardProject
          src={"assets/img/short-img.png"}
          name={"Shortly"}
          desc={
            "Esta aplicação foi desenvolvida com React.jsx, Sass, Context-api, componentes reutilizaveis. Com o objetivo de fornecer ao usuario uma ferramenta para encurtar links atravéz de uma API externa."
          }
          href={"https://link-shortener-dc15.vercel.app/"}
          url={"https://github.com/Castellan-Lucas/link-shortener"}
        />

        {/* <CardProject
          src={"assets/img/cartao-img.png"}
          name={"Cartao Interativo"}
          desc={""}
          href={""}
          url={""}
        /> */}
      </div>
    </div>
  );
}
