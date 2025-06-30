import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { EmailAddress } from "../../../../../../../Constants";
import { CharOpenMenu } from "../../../../../../../Data/Forms&Table/Forms/FormControls";
import CommonOpenMenu from "../../../../Common/CommonOpenMenu";

const BaseFloatingLayoutContent = () => {
  return (
    <Col sm="9">
      <Row className="g-2">
        <Col xxl="6">
          <FormGroup floating>
            <Input type="email" placeholder="name@example.com" defaultValue="mdo@example.com" />
            <Label>{EmailAddress}</Label>
          </FormGroup>
        </Col>
        <CommonOpenMenu colClass="col-xxl-6" inputId="floatingSelectGrid" options={CharOpenMenu} />
      </Row>
    </Col>
  );
};
export default BaseFloatingLayoutContent;
