import React from 'react'
import CardLearning from "../CardLearning/index"
import '../Learning/Learning.sass'


export default function Learning() {
  return (
    <div className="container-sublearning">
      <div className="conteudo-sublearning">
        <div className='sub-leraning'>
          <h1>LEARNING:</h1>
        </div>
      </div>
      <div className="container-pai-">
        <div className="container-skills-">
          <div className="conteudo-skills-">
            <CardLearning nome1={"REDUX"}   src="public/img/redux.png"/>
            <CardLearning nome2={"GO-LANG"} src="public/img/golang.png" />
            <CardLearning nome3={"NODE.JS"} src3="public/img/node.png" />
            <CardLearning nome4={"MYSQL"}   src4="public/img/sql.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
