import { MouseEvent, useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupText } from "reactstrap";
import { DropdownWithInputTitle, Inputs } from "../../../Constants";
import { DropdownWithInputSubTitle } from "../../../Data/UiKits/Dropdown";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const DropdownWithInput = () => {
  const [open, setOpen] = useState(false);
  const stopPropagation = (e: MouseEvent<HTMLInputElement>) => e.stopPropagation();
  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={DropdownWithInputTitle} span={DropdownWithInputSubTitle} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={() => setOpen(!open)} direction="down">
                <DropdownToggle color="warning">{Inputs}</DropdownToggle>
                <DropdownMenu className="dropdown-block dropdown-wrapper dark-input-type">
                  <DropdownItem>
                    <InputGroup className="rounded-0 border-0 shadow-none">
                      <InputGroupText className="ps-0">
                        <Input className="mt-0 me-2" type="checkbox" onClick={stopPropagation} />
                        <span>{"Default checkbox"}</span>
                      </InputGroupText>
                    </InputGroup>
                    <InputGroup className="rounded-0 border-0 shadow-none">
                      <InputGroupText className="ps-0">
                        <Input className="mt-0 me-2" type="radio" onClick={stopPropagation} />
                        <span>{"Default radio"}</span>
                      </InputGroupText>
                    </InputGroup>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DropdownWithInput;
