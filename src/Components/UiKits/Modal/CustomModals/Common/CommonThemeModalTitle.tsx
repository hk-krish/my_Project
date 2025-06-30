import { Fragment } from "react/jsx-runtime";
import { CommonThemeModalTitleType } from "../../../../../Types/UiKitsType";

const CommonThemeModalTitle:React.FC<CommonThemeModalTitleType> = ({ heading, subHeading, text }) => {
  return (
    <Fragment>
      <ul className="dot-group pb-3 pt-0">
        <li /><li /><li />
      </ul>
      <div className="title-wrapper pb-3 modal-heading">
        <h4 className="theme-name mb-0">
          <span>{heading}</span> {subHeading}
        </h4>
        <p className="text-gray">{text}</p>
      </div>
    </Fragment>
  );
};
export default CommonThemeModalTitle;
