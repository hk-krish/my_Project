import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { CommonSelectDropdownProps } from "../../../../Types/FormsType";

const CommonSelectDropdown: React.FC<CommonSelectDropdownProps> = ({ inputClass, options, title, multiple, optionClass }) => {
  return (
    <Col>
      <FormGroup>
        <Label>{title}</Label>
        <Input type="select" className={inputClass }  multiple={multiple}>
          {options.map((item, index) => (
            <option className={optionClass ? optionClass : "custom-scrollbar"} key={index}>{item}</option>
          ))}
        </Input>
      </FormGroup>
    </Col>
  );
};
export default CommonSelectDropdown;
