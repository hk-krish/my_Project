import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { FilledTooltipTitle } from "../../../Constants";
import { FilledTooltipSubTitle, FlippedTooltipData } from "../../../Data/UiKits/Tooltip";

const FilledTooltip = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleTooltip = (index: number) => setOpenIndex(openIndex === index ? null : index);
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FilledTooltipTitle} span={FilledTooltipSubTitle} />
        <CardBody className="fill-tooltip">
          <div className="common-flex">
            {FlippedTooltipData &&
              FlippedTooltipData.map((item, index) => (
                <Fragment key={index}>
                  <Button outline={true} color={item.class} id={`filled_${index}`} onClick={() => toggleTooltip(index)}>
                    {item.text}
                  </Button>
                  <Tooltip isOpen={openIndex === index} target={`filled_${index}`} toggle={() => toggleTooltip(index)}>
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
export default FilledTooltip;
