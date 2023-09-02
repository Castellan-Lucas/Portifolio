import React from 'react'
import '../SobreMim/SobreMim.sass'
import Button from '../Button';

export default function Sobremim(props) {

  const link = () => {
    onclick = window.open(
      "https://drive.google.com/file/d/1zcrqZZ0OFYR-GF8B-ihTnM78ml1UhBpN/view?usp=drive_link",
      "_blank"
    );
  }
    return (
      <div id={props.id} className="global">
        <div className="container-sobre">
          <div className="container-cont-p">
            <h4 className="title">Sobre mim</h4>
            <p>
              Sou programador Frontend, estudante da área de tecnologia cursando
              sistemas de informação na Unifacef em Franca-sp. Atualmente no
              terceiro ano da faculdade já tive a oportunidade de estudar
              diversas linguagens e me aprofundar em alguma delas. Participei de
              algumas maratonas de programação feitas na própria faculdade a
              qual me ajudou e me forçou a me desenvolver com mais velocidade.
            </p>
            <br></br>
            <p>
              Contudo, continuo sempre estudando e me desenvolvendo para
              alcançar um bom emprego na área de tecnologia. React.js,
              Javascript, Typescript, SASS, Next.js e Redux são linguagens que
              possuo conhecimento concreto a qual consigo desenvolver bem! Além
              disto possuo bom conhecimento na área de banco de dados, a qual
              conquistei através da faculdade com professores autorizados da
              oracle
            </p>
            <br></br>
            <br></br>
            <Button url={link} name={"SAIBA MAIS"} />
          </div>
          <div className="container-img-">
            <img className="lucas" src="assets/img/ft2.jpeg"></img>
          </div>
        </div>
      </div>
    );
}
