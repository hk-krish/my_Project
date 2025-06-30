import { useDispatch } from "react-redux";
import { MixLayoutTitle } from "../../../../Constants";
import { mixLayouts } from "../../../../Data/Layout/ThemeCustomizer";
import { addSideBarBackGround } from "../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducers";

const MixLayout = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h6>{MixLayoutTitle}</h6>
      <ul className="layout-grid customizer-mix">
        {mixLayouts.map((layout, index) => (
          <li key={index} className={`color-layout`} onClick={() => dispatch(addSideBarBackGround(layout.value))}>
            <div className={`header ${layout.headerClass}`}>
              <ul><li /><li /><li /></ul>
            </div>
            <div className="body">
              <ul>
                <li className={`sidebar ${layout.sidebarClass}`}></li>
                <li className={`body ${layout.bodyClass}`}></li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MixLayout;