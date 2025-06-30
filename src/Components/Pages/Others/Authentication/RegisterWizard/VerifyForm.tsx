import React, { Fragment } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { City, Country, State } from "../../../../../Constants";
import { RegisterWizardForm } from "../../../../../Types/OthersType";

const VerifyForm: React.FC<RegisterWizardForm> = ({ formValue, updateUserData }) => {
  return (
    <Fragment>
      <FormGroup>
        <Label className="col-form-label">{Country}</Label>
        <Input type="text" onChange={updateUserData} value={formValue.country} name="country" placeholder="country"/>
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label">{State}</Label>
        <Input value={formValue.state} onChange={updateUserData} name="state" placeholder="state" type="text" />
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label">{City}</Label>
        <Input value={formValue.city} onChange={updateUserData} name="city" placeholder="city" type="text" />
      </FormGroup>
    </Fragment>
  );
};
export default VerifyForm;
