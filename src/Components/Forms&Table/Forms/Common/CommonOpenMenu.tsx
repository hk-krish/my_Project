import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { OpenSelectMenu, WorksWithSelects } from "../../../../Constants";
import { CommonOpenMenuProps } from "../../../../Types/FormsType";

const CommonOpenMenu: React.FC<CommonOpenMenuProps> = ({ inputId, colClass, options }) => {
  return (
    <Col className={colClass}>
      <FormGroup floating>
        <Input type="select" id={inputId}>
          <option value="">{OpenSelectMenu}</option>
          {options.map((item, index) => (
            <option key={index} value={index}>
              {item}
            </option>
          ))}
        </Input>
        <Label for={inputId}>{WorksWithSelects}</Label>
      </FormGroup>
    </Col>
  );
};
export default CommonOpenMenu;
