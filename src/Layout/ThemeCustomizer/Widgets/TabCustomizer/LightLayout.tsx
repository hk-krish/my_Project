import { useState } from "react";
import { useDispatch } from "react-redux";

import { LightLayoutTitle } from "../../../../Constants";
import { lightColors } from "../../../../Data/Layout/ThemeCustomizer";
import { addSideBarBackGround } from "../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducers";

const LightLayout = () => {

  const dispatch = useDispatch();
  const [colorBackground1, setColorBackground1] = useState("");
  const [colorBackground2, setColorBackground2] = useState("");

  const handleColorChange = (primaryColor: string, secondaryColor: string) => {
    dispatch(addSideBarBackGround("light"));
    setColorBackground1(primaryColor);
    setColorBackground2(secondaryColor);
    document.documentElement.style.setProperty("--theme-default", colorBackground1);
    document.documentElement.style.setProperty("--theme-secondary", colorBackground2);
  };

  return (
    <>
      <h6>{LightLayoutTitle}</h6>
      <ul className="layout-grid customizer-color">
        {lightColors.map((colorOption, index) => (
          <li key={index} className="color-layout" data-attr={colorOption.name} data-primary={colorOption.primary} data-secondary={colorOption.secondary} onClick={() => handleColorChange(colorOption.primary, colorOption.secondary)}>
            <div />
          </li>
        ))}
      </ul>
    </>
  );
};

export default LightLayout;