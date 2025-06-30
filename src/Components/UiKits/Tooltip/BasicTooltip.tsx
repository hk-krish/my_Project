import { useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import { BasicTooltipText, BasicTooltipTitle, Href, InlineTooltipContent, SurpriseText } from "../../../Constants";
import { TooltipStateProps } from "../../../Types/UiKitsType";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { BasicTooltipSubTitle } from "../../../Data/UiKits/Tooltip";

const BasicTooltip = () => {
  const [state, setState] = useState<TooltipStateProps>({ tooltip1: false, tooltip2: false, tooltip3: false });
  const toggleTooltip = (key: keyof TooltipStateProps) => setState((prevState) => ({ ...prevState, [key]: !prevState[key] }));

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={BasicTooltipTitle} span={BasicTooltipSubTitle} />
        <CardBody>
          <Button color="primary" className="example-popover" id="TooltipExample">{BasicTooltipText}</Button>
          <Tooltip placement="top" isOpen={state.tooltip1} target="TooltipExample" toggle={() => toggleTooltip("tooltip1")}>{SurpriseText}</Tooltip>
          <h3 className="mb-1 py-4 pb-0">{InlineTooltipContent}</h3>
          <p className="mb-0">
            {"Here, is some content about tooltips that you can set the"}
            <a href={Href} className="txt-primary fw-bold" id="Tooltip1">{" tooltip "}</a>
            {"inside the content with help of tooltip and also you can add"}
            <Button color="success" id="Tooltip2" className="text-white border-0 ms-1 px-3 py-1 me-0 mb-0">{"button"}</Button>
            {".Tooltips helps you to add more and more content. A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element"}
          </p>
          <Tooltip placement="top" isOpen={state.tooltip2} target="Tooltip1" toggle={() => toggleTooltip("tooltip2")}>{"tooltip"}</Tooltip>
          <Tooltip placement="top" isOpen={state.tooltip3} target="Tooltip2" toggle={() => toggleTooltip("tooltip3")}>{"button"}</Tooltip>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BasicTooltip;
