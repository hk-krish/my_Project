import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { ColoredTooltipTitle } from "../../../Constants";
import { ColorTooltipData, ColoredTooltipSubTitle } from "../../../Data/UiKits/Tooltip";

const ColoredTooltip = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const toggleTooltip = (index: number) => setOpenIndex(openIndex === index ? -1 : index);

  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={ColoredTooltipTitle} span={ColoredTooltipSubTitle} />
        <CardBody>
          <div className="common-flex">
            {ColorTooltipData &&
              ColorTooltipData.map((item, index) => (
                <Fragment key={index}>
                  <Button color={item.class} id={`color_${index}`} onClick={() => toggleTooltip(index)}>
                    {item.text}
                  </Button>
                  <Tooltip isOpen={openIndex === index} target={`color_${index}`} toggle={() => toggleTooltip(index)}>
                    {item.text}
                  </Tooltip>
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ColoredTooltip;
