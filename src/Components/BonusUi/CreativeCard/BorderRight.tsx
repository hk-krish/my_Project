import { Card, CardBody, Col, Form, Input, Label } from "reactstrap";
import { BorderRightTitle, EmailAddress } from "../../../Constants";
import { BorderRightSubTitle } from "../../../Data/BonusUi/CreativeCard";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const BorderRight = () => {
  return (
    <Col md="6" xs="12">
      <Card>
        <CommonCardHeader title={BorderRightTitle} span={BorderRightSubTitle} headClass="border-r-secondary pb-0" />
        <CardBody>
          <p>{"You can design your creative card by taking only the "}<strong>{"border-l-primary "}</strong>{" class. If you want to use other colors like this: "}<strong>{"border-l-*"}</strong></p>
          <Form>
            <Label>{EmailAddress}</Label>
            <Input type="email" placeholder="youremail@gmail.com" />
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BorderRight;
