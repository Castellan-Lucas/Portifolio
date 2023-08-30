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
            <CardLearning nome={"REDUX"}   src="/assets/img/redux.png" />
            <CardLearning nome={"GO-LANG"} src="/assets/svg/go.svg" />
            <CardLearning nome={"NODE.JS"} src="/assets/svg/node.svg" />
            <CardLearning nome={"MYSQL"}   src="/assets/svg/sql.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
