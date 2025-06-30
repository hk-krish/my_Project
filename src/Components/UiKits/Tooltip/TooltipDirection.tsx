import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { TooltipDirectionTitle, TooltipOn } from "../../../Constants";
import { TooltipDirectionSubTitle, TooltipPosition } from "../../../Data/UiKits/Tooltip";
import { Placement } from "../../../Types/UiKitsType";

const TooltipDirection = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const toggleTooltip = (index: number) => setOpenIndex(openIndex === index ? -1 : index);

  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={TooltipDirectionTitle} span={TooltipDirectionSubTitle} />
        <CardBody>
          <div className="common-flex">
            {TooltipPosition &&
              TooltipPosition.map((item, index) => (
                <Fragment key={index}>
                  <Button color={item.class} id={`direction_${index}`} onClick={() => toggleTooltip(index)}>
                    {TooltipOn} {item.position}
                  </Button>
                  <Tooltip isOpen={openIndex === index} placement={item.position as Placement} target={`direction_${index}`} toggle={() => toggleTooltip(index)}>
                    {TooltipOn} {item.position}
                  </Tooltip>
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default TooltipDirection;
