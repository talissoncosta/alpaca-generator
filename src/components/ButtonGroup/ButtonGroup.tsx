import React from "react";
import { Button } from "../../components";
import { capitalize } from "../../utils";

type ButtonsType = {
  buttons: Array<string>;
  selected: string;
  setSelected: (key: any) => void;
  type?: string;
};

const ButtonGroup = ({ buttons, selected, setSelected, type }: ButtonsType) => (
  <div className="buttons">
    {buttons.map((btn: string) => (
      <Button
        text={capitalize(btn)}
        key={btn}
        setSelected={() => setSelected({ type: type || btn, payload: btn })}
        selected={selected === btn}
      />
    ))}
  </div>
);

export default ButtonGroup;
