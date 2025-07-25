import { useState } from "react";
import { Col, Input, Label, Tooltip } from "reactstrap";
import { TooltipLabelText } from "../../../../../../Constants";
import { TypesOfProductData } from "../../../../../../Data/Applications/ECommerce";

const TypesOfProduct = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Col xs="12">
      <Label for="exampleFormControlInput1">
        {TooltipLabelText}
        <i className="icon-help-alt ms-1" id="tooltip1" />
        <Tooltip target="tooltip1" placement="top" toggle={toggle} isOpen={tooltipOpen}>
          {"Choose the kind of discount that will be used on that particular item."}
        </Tooltip>
      </Label>
      <ul className="radio-wrapper">
        {TypesOfProductData.map((data, i) => (
          <li key={i}>
            <Input id={data.id} type="radio" name="radio5" defaultValue="option5" />
            <Label for={data.id} check>
              <span>{data.title}</span>
            </Label>
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default TypesOfProduct;
