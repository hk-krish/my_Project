import { Fragment, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { DropdownTitle } from "../../../../../../Constants";
import { ButtonDropdownListProps } from "../../../../../../Types/FormsType";

const ButtonDropdownList: React.FC<ButtonDropdownListProps> = ({ color, title, options, outline, divider, split, span }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color={color} outline={outline} caret={true} split={split}>
        {title}
        {span && <span className="visually-hidden">{DropdownTitle}</span>}
      </DropdownToggle>
      <DropdownMenu className="dropdown-block">
        {options.map((item, i) => (
          <Fragment key={i}>
            <DropdownItem>{item}</DropdownItem>
            {divider && i === 2 && <DropdownItem divider />}
          </Fragment>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
export default ButtonDropdownList;
