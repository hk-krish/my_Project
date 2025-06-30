import { Fragment, useState } from "react";
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Href } from "../../../../Constants";
import { DropdownCommonProp } from "../../../../Types/UiKitsType";

const DropdownCommon: React.FC<DropdownCommonProp> = ({ item, toggleClass }) => {
  const [open, setOpen] = useState(false);
  return (
    <ButtonGroup className={item.divClass}>
      <Dropdown isOpen={open} toggle={() => setOpen(!open)} direction={item.position ? item.position : "down"}>
        <DropdownToggle caret className={toggleClass} color={item.class} size={item.size}>
          {item.text}
        </DropdownToggle>
        <DropdownMenu className={item.bodyClass}>{item.menulist && item.menulist.map((item, index) => <Fragment key={index}>{item !== "" ? <DropdownItem href={Href}>{item}</DropdownItem> : <DropdownItem href={Href} divider></DropdownItem>}</Fragment>)}</DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};
export default DropdownCommon;
