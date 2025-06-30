import { useState } from "react";
import { Col, Input, Label, Row, Tooltip } from "reactstrap";
import { WeightKg } from "../../../../../../Constants";
import { useAppDispatch } from "../../../../../../ReduxToolkit/Hooks";
import { setFormValue } from "../../../../../../ReduxToolkit/Reducers/ECommerce/AddProductSlice";

export const KgWeightInput = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <Col xs="12">
      <Row>
        <Col xs="12">
          <Label> {WeightKg} </Label>
          <i className="icon-help-alt ms-1" id="tooltip2" />
          <Tooltip target="tooltip2" placement="top" toggle={() => setTooltipOpen(!tooltipOpen)} isOpen={tooltipOpen}>
            {"set proper weight for product items."}
          </Tooltip>
        </Col>
        <Col xs="12">
          <Input name="inputCity" type="number" onChange={(e) => dispatch(setFormValue({ name: "inputCity", value: e.target.value }))} />
          <p className="f-light"> Decide if the product is a digital or physical item. Shipping may be necessary for real-world items. </p>
        </Col>
      </Row>
    </Col>
  );
};
