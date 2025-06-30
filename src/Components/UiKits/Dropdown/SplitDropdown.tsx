import { useState } from "react";
import { Button, ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Href, SplitDropdownTitle } from "../../../Constants";
import { SplitDropdownData, SplitDropdownSubTitle } from "../../../Data/UiKits/Dropdown";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const SplitDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <Col sm="12" xl="12">
      <Card>
        <CommonCardHeader title={SplitDropdownTitle} span={SplitDropdownSubTitle} />
        <CardBody className="dropdown-basic me-0">
          <div className="common-flex">
            {SplitDropdownData &&
              SplitDropdownData.map((data, index) => (
                <ButtonGroup key={index}>
                  <Button outline color={data.class}>{data.text}</Button>
                  <Dropdown className="separated-btn" isOpen={open} toggle={() => setOpen(!open)} direction="down">
                    <DropdownToggle color={data.class}>
                      <i className="icofont icofont-arrow-down"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-content">
                      {data.menulist &&
                        data.menulist.map((item, index) => (
                          <DropdownItem href={Href} key={index}>
                            {item}
                          </DropdownItem>
                        ))}
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SplitDropdown;
