import { Col, Input, InputGroup, InputGroupText } from "reactstrap";
import { EmailVerificationTitle, Verify } from "../../../../../../Constants";

const EmailVerificationContent = () => {
  return (
    <Col xxl="8" className="box-col-7">
      <h2>{EmailVerificationTitle}</h2>
      <p>{"A verification code has been sent to your email. This code will be valid for 15 minutes."}</p>
      <InputGroup className="mb-3">
        <Input type="text" placeholder="Please enter the code here" />
        <InputGroupText className="bg-primary">{Verify}</InputGroupText>
      </InputGroup>
    </Col>
  );
};
export default EmailVerificationContent;
