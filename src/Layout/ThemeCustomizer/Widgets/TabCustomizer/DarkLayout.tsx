import { useState } from "react";
import { useDispatch } from "react-redux";
import { DarkLayoutTitle } from "../../../../Constants";
import { darkColors } from "../../../../Data/Layout/ThemeCustomizer";
import { addSideBarBackGround } from "../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducers";

const DarkLayout = () => {
  const dispatch = useDispatch();
  const [colorBackground1, setColorBackground1] = useState("");
  const [colorBackground2, setColorBackground2] = useState("");

  const handleColorChange = (primaryColor: string, secondaryColor: string) => {
    dispatch(addSideBarBackGround("dark-only"));
    setColorBackground1(primaryColor);
    setColorBackground2(secondaryColor);
    document.documentElement.style.setProperty("--theme-default", colorBackground1);
    document.documentElement.style.setProperty("--theme-secondary", colorBackground2);
  };

  return (
    <>
      <h6>{DarkLayoutTitle}</h6>
      <ul className="layout-grid customizer-color dark">
        {darkColors.map((colorOption, index) => (
          <li key={index} className="color-layout" data-attr={colorOption.name} data-primary={colorOption.primary} data-secondary={colorOption.secondary} onClick={() => handleColorChange(colorOption.primary, colorOption.secondary)}>
            <div />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DarkLayout;