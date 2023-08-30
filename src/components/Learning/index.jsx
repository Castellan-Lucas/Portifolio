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
            <CardLearning nome={"REDUX"}   src="/assets/redux.png" />
            <CardLearning nome={"GO-LANG"} src="src/assets/golang.png" />
            <CardLearning nome={"NODE.JS"} src="src/assets/node.png" />
            <CardLearning nome={"MYSQL"}   src="src/assets/sql.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
