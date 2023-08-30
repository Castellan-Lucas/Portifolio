import React from "react";
import "../Button/Button.sass";

export default function Button({ name, href, url }) {
  return (
    <div className="button-nav">
      <a href={href} className="custom-button" onClick={url}>
        {name}
      </a>
    </div>
  );
}
