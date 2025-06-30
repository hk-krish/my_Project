import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Href } from "../../../../Constants";
import { DashBoardCommonDropdown } from "../../../../Types/CommonComponents";
import SvgIcon from "../../../CoreComponents/SvgIcon";

export const DashboardDropdown: React.FC<DashBoardCommonDropdown> = ({ days, dropdownTitle, dropdownClass, dropdownToggleClass, dropdownIcon }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Dropdown className={`icon-dropdown ${dropdownClass ? dropdownClass : ""}`} isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
      <DropdownToggle color="transparent" caret={dropdownTitle ? true : false} className={dropdownToggleClass}>
        {dropdownTitle && dropdownTitle}
        {dropdownIcon ?  <div className="drop-menu"><i className="icon-more-alt" /></div> : <SvgIcon iconId="setting" />}
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag="a" href={Href}>{`${days ? "Today" : "Weekly"}`}</DropdownItem>
        <DropdownItem tag="a" href={Href}>{`${days ? "Tomorrow" : "Monthly"}`}</DropdownItem>
        <DropdownItem tag="a" href={Href}>{`${days ? "Yesterday" : "Yearly"}`}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
