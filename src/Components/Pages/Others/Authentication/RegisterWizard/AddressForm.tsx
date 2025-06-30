import React, { Fragment } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { ConfirmPassword, EmailAddress, Password } from "../../../../../Constants";
import { RegisterWizardForm } from "../../../../../Types/OthersType";

const AddressForm: React.FC<RegisterWizardForm> = ({ formValue, updateUserData }) => {
  return (
    <Fragment>
      <FormGroup>
        <Label className="col-form-label">{EmailAddress}</Label>
        <Input name="email" onChange={updateUserData} value={formValue.email} type="email" placeholder="name@example.com" />
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label">{Password}</Label>
        <Input name="password" onChange={updateUserData} value={formValue.password} type="password" placeholder="Password" autoComplete="off"/>
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label">{ConfirmPassword}</Label>
        <Input name="confirmPassword" onChange={updateUserData} value={formValue.confirmPassword} type="password" placeholder="Enter confirm password" autoComplete="off"/>
      </FormGroup>
    </Fragment>
  );
};
export default AddressForm;
