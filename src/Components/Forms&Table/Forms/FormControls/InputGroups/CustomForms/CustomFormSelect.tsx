import React from "react";
import { Input } from "reactstrap";
import { CustomFormSelectProps } from "../../../../../../Types/FormsType";

const CustomFormSelect: React.FC<CustomFormSelectProps> = ({ inputId, options, title }) => {
  return (
    <Input type="select" id={inputId}>
      <option>{title}</option>
      {options.map((item, i) => (
        <option key={i} value={i}>
          {item}
        </option>
      ))}
    </Input>
  );
};
export default CustomFormSelect;
