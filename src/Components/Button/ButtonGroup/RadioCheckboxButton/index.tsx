import { Card, CardBody, Col, Row } from "reactstrap";
import { RadioCheckboxData } from "../../../../Data/Buttons/GroupButton";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import CheckBoxButton from "./CheckBoxButton";
import RadioBoxButton from "./RadioBoxButton";

const RadioCheckboxButton = () => {
  return (
    <Col xs="12">
      {RadioCheckboxData.map((item, i) => (
        <Card key={i}>
          <CommonCardHeader title={item.title} span={item.span} tag headClass="card-no-border pb-0" />
          <CardBody className="btn-group-showcase radio-checkbox">
            <Row>{item.subButton.map((item, i) => (item.checkBox ? <CheckBoxButton item={item} key={i} /> : <RadioBoxButton item={item} key={i} />))}</Row>
          </CardBody>
        </Card>
      ))}
    </Col>
  );
};

export default RadioCheckboxButton;
