import React from "react";
import "../Button/Button.sass";

export default function Button({ name, href }) {
  return (
    <div className="button-nav">
      <a href={href} className="custom-button">
        {name}
      </a>
    </div>
  );
}
