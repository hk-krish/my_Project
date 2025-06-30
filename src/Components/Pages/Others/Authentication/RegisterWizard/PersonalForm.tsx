import { FormGroup, Input, Label } from "reactstrap";
import { RegisterWizardForm } from "../../../../../Types/OthersType";
import { FirstName, LastName, Phone } from "../../../../../Constants";
import { Fragment } from "react/jsx-runtime";

const PersonalForm: React.FC<RegisterWizardForm> = ({ formValue, updateUserData }) => {
  return (
    <Fragment>
      <FormGroup>
        <Label className="col-form-label" htmlFor="firstname">{FirstName}</Label>
        <Input value={formValue.firstName} name="firstName" onChange={updateUserData} type="text" placeholder="Johan" />
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label" htmlFor="lastname">{LastName}</Label>
        <Input value={formValue.lastName} name="lastName" onChange={updateUserData} type="text" placeholder="Deo" />
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label" htmlFor="phone">{Phone}</Label>
        <Input value={formValue.contactNumber} name="contactNumber" onChange={updateUserData} type="number" placeholder="123456745" />
      </FormGroup>
    </Fragment>
  );
};
export default PersonalForm;
