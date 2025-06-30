import { useState } from "react";
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { DarkDropdownTitle, DarkNight, Href } from "../../../Constants";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { DarkDropdownSubTitle } from "../../../Data/UiKits/Dropdown";

const DarkDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={DarkDropdownTitle} span={DarkDropdownSubTitle} />
        <CardBody className="dropdown-basic m-0 rtl-dropdown">
          <div className="common-flex dark-dropdown">
            <Dropdown isOpen={open} toggle={() => setOpen(!open)} direction="down">
              <DropdownToggle caret color="dark" className="text-white">
                {DarkNight}
              </DropdownToggle>
              <DropdownMenu className="dropdown-block rounded-0" dark>
                <DropdownItem href={Href} className="bg-dark text-light">{"Dark moon"}</DropdownItem>
                <DropdownItem href={Href}>{"Dark owl"}</DropdownItem>
                <DropdownItem href={Href}>{"Night fall"}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DarkDropdown;
