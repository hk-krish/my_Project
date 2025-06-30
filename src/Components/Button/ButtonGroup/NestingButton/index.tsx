import { Card, CardBody, Col } from "reactstrap";
import { NestingTitle } from "../../../../Constants";
import { NestingButtonSpan } from "../../../../Data/Buttons/GroupButton";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import NestingButtonDropdown from "./NestingButtonDropdown";
import NestingButtonIcons from "./NestingButtonIcons";

const NestingButton = () => {
  return (
    <Col lg="6">
      <Card className="height-equal">
        <CommonCardHeader headClass="card-no-border pb-0" title={NestingTitle} span={NestingButtonSpan} tag />
        <CardBody className="btn-group-wrapper">
          <NestingButtonDropdown />
          <NestingButtonIcons />
        </CardBody>
      </Card>
    </Col>
  );
};

export default NestingButton;
