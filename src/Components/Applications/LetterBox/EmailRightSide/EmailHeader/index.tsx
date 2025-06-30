import {  FormGroup, Input, Label } from "reactstrap";
import EmailNavTab from "./EmailNavTab";
import { Search } from "../../../../../Constants";
import RightDropDown from "./RightDropDown";

const EmailHeader = () => {
  return (
    <div className="mail-header-wrapper">
      <div className="mail-header">
        <FormGroup check inline className="m-0">
          <Input className="checkbox-primary" type="checkbox" />
          <Label check />
          <EmailNavTab />
        </FormGroup>
      </div>
      <div className="mail-body">
        <div className="mail-search d-flex-align-items-center">
          <Input type="text" placeholder={Search} />
          <i className="fa fa-search" />
        </div>
        <div className="light-square bg-light-info txt-info">
          <i className="fa fa-refresh" />
        </div>
        <div className="light-square bg-light-danger txt-danger">
          <i className="fa fa-trash" />
        </div>
        <RightDropDown />
      </div>
    </div>
  );
};

export default EmailHeader;
