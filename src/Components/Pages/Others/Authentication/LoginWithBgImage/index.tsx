import { Col, Container, Row } from "reactstrap";
import LoginForm from "../Common/LoginForm";

const LoginWithBgImage = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xl="7" className="b-center bg-size p-0 loginImageBg" />
        <Col xl="5" className="p-0">
          <div className="login-card login-dark">
            <LoginForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginWithBgImage;
