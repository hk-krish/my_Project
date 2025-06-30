import { useState } from "react";
import { Button, Col, Form, Input, Row } from "reactstrap";
import { Href, VerificationCodeTitle, Verify } from "../../../../../../Constants";
import { dynamicImage, Image } from "../../../../../../Utils";

const VerificationCode = () => {
  const [val, setVal] = useState(Array(6).fill(""));
  const handleChange = (e: string, index: number) => {
    if (e.length > 1) return;
    else {
      const tempt = [...val];
      tempt[index] = e;
      setVal(tempt);
    }
  };
  return (
    <Col md="6">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="authenticate">
          <h2>{VerificationCodeTitle}</h2>
          <Image className="img-fluid" src={dynamicImage(`forms/authenticate.png`)} alt="authenticate" />
          <span>{"We've sent a verification code to"}</span>
          <span>{"+91********70"}</span>
          <Form onSubmit={(event) => event.preventDefault()}>
            <Row>
              <Col>
                <h5>{"Your OTP Code here:"}</h5>
              </Col>
              <Col className="otp-generate">
                {[...Array(6)].map((_, index) => (
                  <Input key={index} value={val[index]} className="code-input" type="number" onChange={(e) => handleChange(e.target.value, index)} />
                ))}
              </Col>
              <Col>
                <Button color="primary" className="w-100">{Verify}</Button>
              </Col>
              <div>
                <span>{"Not received your code?"}</span>
                <span>
                  <a href={Href}>{"Resend"} </a>
                  {"OR"}
                  <a href={Href}> {"Call"}</a>
                </span>
              </div>
            </Row>
          </Form>
        </div>
      </div>
    </Col>
  );
};
export default VerificationCode;
