import { Card, CardBody, Col, Input, InputGroup } from "reactstrap";
import { ButtonsWithDropdownsTitle, DropdownTitle } from "../../../../../../Constants";
import { ButtonDropdownData1, ButtonDropdownData2, ButtonDropdownData3, ButtonDropdownData4, ButtonsWithDropdownSubTitle } from "../../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import ButtonDropdownList from "./ButtonDropdownList";

const ButtonsWithDropdowns = () => {
  return (
    <Col xl="6">
      <Card className="custom-btn-form">
        <CommonCardHeader title={ButtonsWithDropdownsTitle} span={ButtonsWithDropdownSubTitle} />
        <CardBody className="main-custom-form card-wrapper input-group-wrapper">
          <InputGroup>
            <ButtonDropdownList color="info" outline={true} title={DropdownTitle} divider={true} options={ButtonDropdownData1} />
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" />
            <ButtonDropdownList color="danger" outline={true} title={DropdownTitle} divider={true} options={ButtonDropdownData2} />
          </InputGroup>
          <InputGroup> 
            <ButtonDropdownList color="secondary" title={DropdownTitle} divider={true} options={ButtonDropdownData3} />
            <Input type="text" />
            <ButtonDropdownList color="primary" title={DropdownTitle} divider={true} options={ButtonDropdownData4} />
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ButtonsWithDropdowns;
