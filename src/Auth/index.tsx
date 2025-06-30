import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

import { dynamicImage, Image } from "../Utils";
import SignInForm from "./SignInForm";
import { routes } from "../Routers/routes";

const Auth = () => {

  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">
          <div className="login-card login-dark">
            <div>
              <div>
                <Link className="logo" to={routes.Dashboard.Default}>
                  <Image className="img-fluid for-light" src={dynamicImage(`logo/logo.png`)} alt="loginPage" />
                  <Image className="img-fluid for-dark" src={dynamicImage(`logo/logo_dark.png`)} alt="loginPage" />
                </Link>
              </div>
              <div className="login-main">
                <SignInForm />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;