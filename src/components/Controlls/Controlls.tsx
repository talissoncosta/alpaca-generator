import React, { useContext } from "react";
import { ButtonGroup } from "../../components";
import { OptionsContext } from "../../contexts/optionsContext";
import { components, styles } from "./buttons";
import "./Controlls.css";

function Controlls() {
  const {
    state,
    dispatch
  } = useContext(OptionsContext);
  return (
    <div className="container">
      <div className="component">
        <h3> Acessorize the alpaca</h3>
        <ButtonGroup
          buttons={components}
          selected={state.component}
          setSelected={dispatch}
          type="component"
        />
      </div>
      <div className="style">
        <h3> Style</h3>
        <ButtonGroup
          // @ts-expect-error Typescript complains about the key, but It is guarantee that the key is gonna be a valid string
          buttons={styles[state.component]}
          selected={state.style}
          setSelected={dispatch}
          type={state.component}
        />
      </div>
    </div>
  );
}

export default Controlls;
