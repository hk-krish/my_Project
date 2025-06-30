import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "reactstrap";

import ConfigDB from "../../../../Config/Theme";
import { ApplyButton, UnlimitedColorTitle } from "../../../../Constants";
import { addColor } from "../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducers";
import { ColorsType } from "../../../../Types/Layout";

const ColorsComponent = () => {
  const storedPrimaryColor = ConfigDB.color.primaryColor;
  const storedSecondaryColor = ConfigDB.color.secondaryColor;
  const [colors, setColors] = useState<ColorsType>({ colorBackground1: storedPrimaryColor, colorBackground2: storedSecondaryColor });
  const dispatch = useDispatch();

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setColors((prevColors) => ({
      ...prevColors,
      [name]: value,
    }));
  };
  const applyColors = () => {
    dispatch(addColor({ colorBackground1: colors.colorBackground1, colorBackground2: colors.colorBackground2 }));
    document.documentElement.style.setProperty("--theme-default", colors.colorBackground1);
    document.documentElement.style.setProperty("--theme-secondary", colors.colorBackground2);
  };
  return (
    <>
      <h6>{UnlimitedColorTitle}</h6>
      <ul className="layout-grid unlimited-color-layout">
        <Input className="p-0" type="color" name="colorBackground1" value={colors.colorBackground1} onChange={handleColorChange} />
        <Input className="p-0" type="color" name="colorBackground2" value={colors.colorBackground2} onChange={handleColorChange} />
        <Button color="primary" className="color-apply-btn" onClick={applyColors}>
          {ApplyButton}
        </Button>
      </ul>
    </>
  );
};

export default ColorsComponent;