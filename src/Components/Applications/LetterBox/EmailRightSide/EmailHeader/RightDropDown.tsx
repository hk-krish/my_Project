import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { DropMenuData } from "../../../../../Data/Applications/LetterBox";

const RightDropDown = () => {
  const [show, setShow] = useState(false);
  return (
    <Dropdown isOpen={show} toggle={() => setShow(!show)}>
      <DropdownToggle color="transparent" className="border-0 px-0 light-square bg-light-primary txt-primary">
        <i className="fa fa-ellipsis-v" />
      </DropdownToggle>
      <DropdownMenu end className="dropdown-block">
        {DropMenuData.map((data, i) => (
          <DropdownItem key={i}>{data}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default RightDropDown;
