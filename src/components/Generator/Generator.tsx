import React, { useContext } from "react";
import { OptionsContext } from "../../contexts/optionsContext";
import "./Generator.css";

function Generator() {
  const { state } = useContext(OptionsContext);
  const hair = require(`../../images/hair/${state.hair}.png`);
  const neck = require(`../../images/neck/${state.neck}.png`);
  const background = require(`../../images/backgrounds/${state.background}70.png`);
  const mouth = require(`../../images/mouth/${state.mouth}.png`);
  const nose = require(`../../images/nose/${state.nose}.png`);
  const leg = require(`../../images/leg/${state.leg}.png`);
  const eyes = require(`../../images/eyes/${state.eyes}.png`);
  const ears = require(`../../images/ears/${state.ears}.png`);
  const accessories = require(`../../images/accessories/${state.accessories}.png`);
  const images = [
    { name: "background", src: background },
    { name: "neck", src: neck },
    { name: "nose", src: nose },
    { name: "mouth", src: mouth },
    { name: "ears", src: ears },
    { name: "hair", src: hair },
    { name: "leg", src: leg },
    { name: "eyes", src: eyes },
    { name: "accessories", src: accessories },
  ];
  return (
    <div className="generator">
      <div className="screen">
        {images.map(({ src, name }) => (
          <img
            className="base-position"
            src={src}
            alt={name}
            height={600}
            width={600}
          />
        ))}
      </div>
    </div>
  );
}

export default Generator;
