import { Card, CardBody, Col } from "reactstrap";
import DropdownForm from "./DropdownForm";
import DropdownText from "./DropdownText";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { UniqueDropdownTitle } from "../../../../Constants";
import { UniqueDropdownSubTitle } from "../../../../Data/UiKits/Dropdown";

const UniqueDropdown = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={UniqueDropdownTitle} span={UniqueDropdownSubTitle} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <DropdownForm />
            <DropdownText />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default UniqueDropdown;
