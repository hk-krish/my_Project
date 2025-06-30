import { Col, FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { Comments, EmailAddress, InputGroupTitle, InputWithValue, InvalidInput, Layout, OpenSelectMenu, Password, Username, UsernameFeedback2, ValidInput } from "../../../../../../../Constants";
import { RomanOpenMenu } from "../../../../../../../Data/Forms&Table/Forms/FormControls";
import CommonOpenMenu from "../../../../Common/CommonOpenMenu";
import BaseFloatingLayoutContent from "./BaseFloatingLayoutContent";

const BasicFloatingInputBody = () => {
  return (
    <Col>
      <Row className="mb-3">
        <Col sm="3"><Label>{ValidInput}</Label></Col>
        <Col sm="3"><Label>{ValidInput}</Label></Col>
        <Col sm="9">
          <FormGroup floating>
            <Input type="email" placeholder="name@example.com" defaultValue="test@example.com" />
            <Label>{InputWithValue}</Label>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm="3"><Label>{InvalidInput}</Label></Col>
        <Col sm="9">
          <FormGroup floating>
            <Input type="email" placeholder="name@example.com" defaultValue="test@example.com" invalid />
            <Label>{InvalidInput}</Label>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm="3"><Label>{Comments}</Label></Col>
        <Col sm="9">
          <FormGroup floating>
            <Input type="textarea" />
            <Label>{Comments}</Label>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm="3"><Label>{EmailAddress}</Label></Col>
        <Col sm="9">
          <FormGroup floating>
            <Input type="email" />
            <Label>{EmailAddress}</Label>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm="3"><Label>{Password}</Label></Col>
        <Col sm="9">
          <FormGroup floating>
            <Input type="password" autoComplete="off"/>
            <Label>{Password}</Label>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm="3"><Label>{Comments}</Label></Col>
        <Col sm="9">
          <FormGroup floating>
            <Input type="textarea" />
            <Label>{Comments}</Label>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm="3"><Label>{OpenSelectMenu}</Label></Col>
        <CommonOpenMenu colClass="col-sm-9" inputId="floatingSelect" options={RomanOpenMenu} />
      </Row>
      <Row className="mb-3">
        <Col sm="3"><Label>{InputGroupTitle}</Label></Col>
        <Col sm="9">
          <InputGroup className="mb-3">
            <InputGroupText>{"@"}</InputGroupText>
            <FormGroup floating className="mb-0">
              <Input type="text" />
              <Label>{Username}</Label>
            </FormGroup>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm="3"><Label>{InputGroupTitle}</Label></Col>
        <Col sm="9">
          <InputGroup className="has-validation">
            <InputGroupText>{"@"}</InputGroupText>
            <FormGroup floating className="is-invalid mb-0">
              <Input type="text" className="is-invalid" required />
              <Label>{Username}</Label>
            </FormGroup>
            <FormFeedback>{UsernameFeedback2}</FormFeedback>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mb-0">
        <Col sm="3"><Label>{Layout}</Label></Col>
        <BaseFloatingLayoutContent />
      </Row>
    </Col>
  );
};
export default BasicFloatingInputBody;
