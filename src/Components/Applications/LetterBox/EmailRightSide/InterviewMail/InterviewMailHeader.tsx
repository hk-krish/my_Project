import { Fragment, useState } from "react";
import { MailHeader } from "../../../../../Data/Applications/LetterBox";
import { useAppDispatch } from "../../../../../ReduxToolkit/Hooks";
import { handleInterview } from "../../../../../ReduxToolkit/Reducers/LetterBoxSlice";
import SvgIcon from "../../../../CoreComponents/SvgIcon";
import { InterviewMail } from "../../../../../Constants";
import { Tooltip } from "reactstrap";

const InterviewMailHeader = () => {
  const dispatch = useAppDispatch();
  const [tooltipOpen, setTooltipOpen] = useState<number | null>(null);

  return (
    <div className="mail-header-wrapper header-wrapper1">
      <div className="mail-header1">
        <div className="light-square" onClick={() => dispatch(handleInterview(false))}>
          <SvgIcon className="btn-email" iconId="back-arrow" />
        </div>
        <span>{InterviewMail}</span>
      </div>
      <div className="mail-body1">
        {MailHeader.map((data, index) => (
          <Fragment key={index}>
            <div className={data.class} id={`light-${data.icon}`}>
              <SvgIcon iconId={data.icon} className={data.className ? data.className : ""} />
            </div>
            <Tooltip placement="top" isOpen={tooltipOpen === index} target={`light-${data.icon}`} toggle={() => setTooltipOpen(tooltipOpen !== index ? index : null)}>
              {data.tooltip}
            </Tooltip>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default InterviewMailHeader;
