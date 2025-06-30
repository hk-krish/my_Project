import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { PaymentFormProps } from "../../../../../../../Types/FormsType";
import { dynamicImage, Image } from "../../../../../../../Utils";

const CashOnDelivery: React.FC<PaymentFormProps> = ({ payMethod, updateFormData }) => {
  return (
    <Col xs="12">
      <div className="card-wrapper border rounded-3 light-card">
        <div>
          <FormGroup check className="radio radio-primary">
            <Input id="shipping-choose7" type="radio" name="paymentMethodName" value="cashOnDelivery" checked={payMethod === "cashOnDelivery"} onChange={updateFormData} />
            <Label className="mb-0 f-w-500" htmlFor="shipping-choose7" check>{"Cash On Delivery"}</Label>
          </FormGroup>
          <p>{"After your order is delivered, make a cash payment"}</p>
        </div>
        <div>
          <Image src={dynamicImage(`forms/delivery.png`)} alt="delivery" />
        </div>
      </div>
    </Col>
  );
};
export default CashOnDelivery;
