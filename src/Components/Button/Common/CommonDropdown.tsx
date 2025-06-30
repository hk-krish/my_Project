import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { CommonDropdownType } from "../../../Types/Component";
import { DropdownLink, DropdownText } from "../../../Constants";

const CommonDropdown:React.FC<CommonDropdownType> = ({ color, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown isOpen={open} toggle={() => setOpen(!open)}  className="btn-group">
      <DropdownToggle color={color} caret className={`text-white ${className ? className : ""}`}>
        {DropdownText}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>{DropdownLink}</DropdownItem>
        <DropdownItem>{DropdownLink}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default CommonDropdown;