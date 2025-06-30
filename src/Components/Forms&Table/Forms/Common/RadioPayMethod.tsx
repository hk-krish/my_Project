import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { PayMethodTitle } from "../../../../Constants";
import { RadioPayMethodProps } from "../../../../Types/FormsType";

const RadioPayMethod: React.FC<RadioPayMethodProps> = ({ colClass }) => {
  const uniqueId = Math.random().toString(36).substr(2, 9);

  return (
    <div className={colClass}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{PayMethodTitle}</h6>
        <div className="radio-form">
          <FormGroup check>
            <Input type="radio" name={`flexRadioDefault-${uniqueId}`} id={`flexRadioDefault1-${uniqueId}`} required />
            <Label htmlFor={`flexRadioDefault1-${uniqueId}`} check>{"Visa"}</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" name={`flexRadioDefault-${uniqueId}`} id={`flexRadioDefault2-${uniqueId}`} required />
            <Label htmlFor={`flexRadioDefault2-${uniqueId}`} check>{"MasterCard"}</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" name={`flexRadioDefault-${uniqueId}`} id={`flexRadioDefault3-${uniqueId}`} defaultChecked required />
            <Label htmlFor={`flexRadioDefault3-${uniqueId}`} check>{"Paypal"}</Label>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default RadioPayMethod;
