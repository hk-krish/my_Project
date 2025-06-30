import { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { HeadingDropdownTitle, Href, Party } from "../../../Constants";
import { HeadingDropdownSubTitle } from "../../../Data/UiKits/Dropdown";

const HeadingDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={HeadingDropdownTitle} span={HeadingDropdownSubTitle} />
        <CardBody className="rtl-dropdown heading-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={() => setOpen(!open)} direction="down">
                <DropdownToggle caret color="success" className="rounded-pill text-white">
                  {Party}
                </DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem href={Href} header className="fw-bold fs-6">{"Party List"}</DropdownItem>
                  <DropdownItem href={Href}>{"Balloons"}</DropdownItem>
                  <DropdownItem href={Href}>{"Cake"}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default HeadingDropdown;
