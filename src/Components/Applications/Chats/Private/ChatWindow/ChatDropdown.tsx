import { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import SvgIcon from "../../../../CoreComponents/SvgIcon";

const ChatDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="up" className="dropdown-form dropdown-toggle">
      <DropdownToggle color="transparent" className="dropdown-toggle dropdown-form p-0 border-0 bg-transparent"><i className="icon-plus" /></DropdownToggle>
      <DropdownMenu className="chat-icon">
        <div className="mb-2 dropdown-item"><SvgIcon iconId="camera" /></div>
        <div className="dropdown-item"><SvgIcon iconId="attchment" /></div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ChatDropdown;