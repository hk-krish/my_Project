import { Button, ButtonGroup, Card, CardBody, Col } from "reactstrap";
import { ButtonHeading, VerticalTitle } from "../../../Constants";
import { VerticalText } from "../../../Data/Buttons/GroupButton";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import CommonDropdown from "../Common/CommonDropdown";

const VerticalButtonGroup = () => {
  return (
    <Col lg="6">
      <Card className="vertical-btn-group height-equal">
        <CommonCardHeader headClass="card-no-border pb-0" title={VerticalTitle} span={VerticalText} tag />
        <CardBody className="btn-group-wrapper">
          <ButtonGroup vertical>
            <Button color="primary">{ButtonHeading}</Button>
            <Button color="secondary">{ButtonHeading}</Button>
            <ButtonGroup>
              <CommonDropdown color="success" />
            </ButtonGroup>
            <Button color="info">{ButtonHeading}</Button>
            <Button color="warning">{ButtonHeading}</Button>
            <CommonDropdown color="danger" />
            <CommonDropdown color="light" />
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalButtonGroup;