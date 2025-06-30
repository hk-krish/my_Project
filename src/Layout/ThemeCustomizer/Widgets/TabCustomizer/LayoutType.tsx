import { useDispatch } from "react-redux";
import { Badge } from "reactstrap";

import { LayoutTypeTitle } from "../../../../Constants";
import { layoutTypes } from "../../../../Data/Layout/ThemeCustomizer";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setLayoutType } from "../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducers";

const LayoutType = () => {
  const { layoutType } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useDispatch();

  return (
    <>
      <h6>{LayoutTypeTitle}</h6>
      <ul className="main-layout layout-grid">
        {layoutTypes.map(({ type, label }) => (
          <li key={type} data-attr={type} className={`${layoutType === type ? "active" : ""}`} onClick={() => dispatch(setLayoutType(type))}>
            <div className="header bg-light">
              <ul><li /><li /><li /></ul>
            </div>
            <div className="body">
              <ul>
                <li className={type === "rtl" ? "bg-light body" : "bg-light sidebar"}>{label === "RTL" ? <Badge color="primary">{label}</Badge> : ""}</li>
                <li className={type === "rtl" ? "bg-light sidebar" : "bg-light body"}>{label !== "RTL" ? <Badge color="primary">{label}</Badge> : ""}</li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LayoutType;