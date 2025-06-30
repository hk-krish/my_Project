import { useState } from "react";
import { ButtonGroup, Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { Text } from "../../../../Constants";

const DropdownText = () => {
  const [open, setOpen] = useState(false);
  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={() => setOpen(!open)} direction="down">
        <DropdownToggle caret color="dark" className="text-white">{Text}</DropdownToggle>
        <DropdownMenu className="p-4 form-wrapper">
          <p>{"Some example text that's free-flowing within the dropdown menu."}</p>
          <p className="mb-0">{"And this is more example text."}</p>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};
export default DropdownText;
