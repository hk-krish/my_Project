import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import { HtmlTooltipTitle } from "../../../Constants";
import { HtmlTooltipData, HtmlTooltipSubTitle } from "../../../Data/UiKits/Tooltip";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const HtmlTooltip = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleTooltip = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={HtmlTooltipTitle} span={HtmlTooltipSubTitle} />
        <CardBody>
          <div className="common-flex">
            {HtmlTooltipData &&
              HtmlTooltipData.map((item, index) => (
                <Fragment key={index}>
                  <Button color={item.class} id={`html_${index}`} onClick={() => toggleTooltip(index)}>
                    {item.text}
                  </Button>
                  <Tooltip isOpen={openIndex === index} target={`html_${index}`} toggle={() => toggleTooltip(index)}>
                    {item.tooltip}
                  </Tooltip>
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default HtmlTooltip;
