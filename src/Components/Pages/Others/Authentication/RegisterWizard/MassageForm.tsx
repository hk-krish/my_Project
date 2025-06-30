import React, { Fragment } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { Age, Birthday, HavePassport } from "../../../../../Constants";
import { RegisterWizardForm } from "../../../../../Types/OthersType";

const MassageForm: React.FC<RegisterWizardForm> = ({ formValue, updateUserData }) => {
  return (
    <Fragment>
      <FormGroup>
        <Label className="col-form-label">{Birthday}</Label>
        <Input type="date" onChange={updateUserData} value={formValue.birthDate} name="birthDate" />
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label">{Age}</Label>
        <Input value={formValue.age} onChange={updateUserData} name="age" placeholder="Age" type="text" />
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label">{HavePassport}</Label>
        <Input value={formValue.havePassport} onChange={updateUserData} name="havePassport" placeholder="Yes/No" type="text" />
      </FormGroup>
    </Fragment>
  );
};
export default MassageForm;
