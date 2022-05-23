import React from "react";
import "./Button.css";

function Button({ text = 'Hair', selected = true, setSelected =  () => {}}) {
  return <button onClick={setSelected} className={`${selected ? 'selected' : ''}`} >
      {text}
  </button>
}

export default Button;
