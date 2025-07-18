import { useState } from "react";
import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { DropdownLink, DropdownText, Href } from "../../../../Constants";

const NestingButtonDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="m-b-30">
      <ButtonGroup>
        <Button color="primary"><i className="fa fa-bold"></i></Button>
        <Button color="secondary"><i className="fa fa-italic"></i></Button>
        <ButtonGroup>
          <Dropdown isOpen={open} toggle={() => setOpen(!open)}>
            <DropdownToggle caret color="light" className="text-dark">{DropdownText}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
              <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
              <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
              <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  );
};

export default NestingButtonDropdown;