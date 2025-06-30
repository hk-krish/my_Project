import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";
import { DefaultInputText, LargeInput, SizingTitle, SmallInput } from "../../../../../Constants";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { SizingSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";

const Sizing = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={SizingTitle} span={SizingSubTitle} />
        <CardBody className="card-wrapper input-group-wrapper">
          <InputGroup size="sm">
            <InputGroupText> {SmallInput} </InputGroupText>
            <Input type="text" />
          </InputGroup>
          <InputGroup size="default">
            <InputGroupText> {DefaultInputText} </InputGroupText>
            <Input type="text" />
          </InputGroup>
          <InputGroup size="lg">
            <InputGroupText> {LargeInput} </InputGroupText>
            <Input type="text" />
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Sizing;
