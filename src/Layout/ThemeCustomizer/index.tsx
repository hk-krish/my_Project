import { useState } from "react";
import { CallbackNavType } from "../../Types/Layout";
import CustomizerLinks from "./Widgets/CustomizerLinks";
import TabCustomizer from "./Widgets/TabCustomizer";

const ThemeCustomizer = () => {
  const [selected, setSelected] = useState("check-layout");
  const [openCus, setOpenCus] = useState(false);

  const callbackNav: CallbackNavType = (select, open) => {
    setSelected(select);
    setOpenCus(open);
  };
  return (
    <>
      <div className={`customizer-links ${openCus ? "open" : ""}`}>
        <CustomizerLinks callbackNav={callbackNav} selected={selected} />
      </div>
      <div className={`customizer-contain ${openCus ? "open" : ""}`}>
        <TabCustomizer selected={selected} callbackNav={callbackNav} />
      </div>
    </>
  );
};

export default ThemeCustomizer;