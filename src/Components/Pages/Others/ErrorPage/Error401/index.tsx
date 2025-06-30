import { Link } from "react-router-dom";
import { Col, Container } from "reactstrap";
import { Error2 } from "../../../../../Data/Pages/Pages";
import { routes } from "../../../../../Routers/routes";

const Error401 = () => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <div className="error-wrapper">
        <Container>
          <div className="svg-wrraper">
            <Error2 />
          </div>
          <Col md="8" className="offset-md-2">
            <h3>Oops! This Page is Not Found.</h3>
            <p className="sub-content">{"The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved."}</p>
            <Link to={routes.Dashboard.Default} className="btn btn-primary btn-lg">
              {"BACK TO HOME PAGE"}
            </Link>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default Error401;
