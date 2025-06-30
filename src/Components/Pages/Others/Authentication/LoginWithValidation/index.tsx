import { Col, Container, Row } from "reactstrap";
import LoginForm from "../Common/LoginForm";

const LoginWithValidation = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="7" className="order-1 loginImageBg1 b-center bg-size" />
        <Col xl="5" className="p-0">
          <div className="login-card login-dark">
            <LoginForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginWithValidation;
