import React, { useContext } from "react";
import html2canvas from "html2canvas";
import { OptionsContext } from "../../contexts/optionsContext";
import "./ActionButtons.css";
import { getRandomProperty } from "../../utils";
import { styles } from "../Controlls/buttons";

type ActionButtonType = {
  children: React.ReactNode;
  onClick: () => void;
};

const ActionButton = ({ children, onClick }: ActionButtonType) => {
  return (
    <button className="actionButton" onClick={onClick}>
      {children}
    </button>
  );
};

type ActionButtonsProps = {
    imgRef: any
}

function ActionButtons({ imgRef }: ActionButtonsProps) {
  const { dispatch } = useContext(OptionsContext);
  const randomButton = () => {
    dispatch({ type: 'hair', payload: getRandomProperty(styles.hair) });
    dispatch({ type: 'mouth', payload: getRandomProperty(styles.mouth) });
    dispatch({ type: 'ears', payload: getRandomProperty(styles.ears) });
    dispatch({ type: 'eyes', payload: getRandomProperty(styles.eyes) });
    dispatch({ type: 'neck', payload: getRandomProperty(styles.neck) });
    dispatch({ type: 'leg', payload: getRandomProperty(styles.leg) });
    dispatch({ type: 'accessories', payload: getRandomProperty(styles.accessories) });
    dispatch({ type: 'background', payload: getRandomProperty(styles.background) });
  }

  const exportAsImage = async (element: HTMLElement, imageFileName: string) => {
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
  };

  const downloadImage = (blob: string, fileName: string) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style.cssText = "display:none;";
    fakeLink.download = fileName;
    fakeLink.href = blob;
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
    fakeLink.remove();
  };

  return (
      <div className="buttonsContainer">
        <ActionButton onClick={randomButton}>
          🎲 Random
        </ActionButton>
        <ActionButton onClick={async () => exportAsImage(imgRef.current, "my-custom-alpaca")}>
          🏞️ Download
        </ActionButton>
      </div>
  );
}

export default ActionButtons;
