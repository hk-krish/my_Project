import { Col, Container, Row } from "reactstrap";
import LoginForm from "../Common/LoginForm";

const LoginWithImageTwo = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="5" className="b-center bg-size p-0 loginImageBg3" />
        <Col xl="7" className="p-0">
          <div className="login-card login-dark">
            <LoginForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default LoginWithImageTwo;
