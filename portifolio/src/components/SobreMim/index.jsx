import React from 'react'
import '../SobreMim/SobreMim.sass'
import Button from '../Button';

export default function Sobremim() {
  return (
    <div className="global">
      <div className="container-sobre">
        <div className="container-cont-p">
          <h4 className="title">Sobre mim</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            ducimus mollitia molestias exercitationem esse eligendi sapiente
            praesentium ullam, fugit blanditiis voluptate repellendus minus
            illum fugiat magnam repudiandae inventore asperiores. Earum.
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            ducimus mollitia molestias exercitationem esse eligendi sapiente
            praesentium ullam, fugit blanditiis voluptate repellendus minus
            illum fugiat magnam repudiandae inventore asperiores. Earum.
          </p>
          <br></br>
          <br></br>
          <Button name={'SAIBA MAIS'}/>
        </div>
        <div className="container-img-">
          <img className="lucas" src="../public/persona.jpeg"></img>
        </div>
      </div>
    </div>
  );
}
