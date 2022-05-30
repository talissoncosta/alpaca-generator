import React, { RefObject, useContext, useRef } from "react";
import { OptionsContext } from "../../contexts/optionsContext";
import { ActionButtons } from "..";
import "./Generator.css";

const wSize = 550;
const hSize = 500;

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
  const exportRef = useRef<HTMLDivElement>();
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
      <div ref={exportRef as RefObject<HTMLDivElement>} className="screen">
        {images.map(({ src, name }) => (
          <img
            className="base-position"
            key={src}
            src={src}
            alt={name}
            height={hSize}
            width={wSize}
          />
        ))}
      </div>
      <ActionButtons imgRef={exportRef}/>
    </div>
  );
}

export default Generator;
