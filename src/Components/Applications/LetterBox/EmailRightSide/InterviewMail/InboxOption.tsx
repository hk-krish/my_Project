import { useState } from "react";
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { MailPropsType } from "../../../../../Types/Applications";
import SvgIcon from "../../../../CoreComponents/SvgIcon";

const InboxOption:React.FC<MailPropsType> = ({handlePrintData}) => {
  const [fill,setFill] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  return (
    <div className="inbox-options">
      <span>Friday 07 Apr (4 hours ago)</span>
      <div className="light-square" onClick={() => setFill(!fill)}>
        <SvgIcon className={`important-mail ${fill ? "active" : ""}`} iconId="mail-star" />
      </div>
      <div className="light-square" onClick={handlePrintData}>
        <SvgIcon iconId="print" />
      </div>
      <ButtonGroup className="light-square">
        <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
          <DropdownToggle color="transparent" className="border-0"><SvgIcon iconId="menubar" /></DropdownToggle>
          <DropdownMenu className="dropdown-block">
            <DropdownItem><i className="fa fa-mail-reply" />Reply</DropdownItem>
            <DropdownItem><i className="fa fa-mail-forward" />Forward</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ButtonGroup>
    </div>
  );
};

export default InboxOption;