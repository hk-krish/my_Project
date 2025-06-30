import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { UserAddress, UserProfileData } from "../../../../../Data/Applications/Users";
import { routes } from "../../../../../Routers/routes";

const InfoSection = () => {
  return (
    <Row className="g-3">
      <Col sm="6" lg="4" className="order-sm-1 order-xl-0">
        <Row>
          {UserProfileData.map(({ iconClass, text, spanText }, index) => (
            <Col md="6" key={index}>
              <div className="ttl-info text-start">
                <h6 className="mb-1"><i className={`fa fa-${iconClass} me-2`}></i>{text}</h6>
                <span>{spanText}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
      <Col sm="12" lg="4" className="order-sm-0 order-xl-1">
        <div className="user-designation">
          <div className="title">
            <Link to={routes.Users.Profile}>Mark jecno</Link>
          </div>
          <div className="desc">designer</div>
        </div>
      </Col>
      <Col sm="6" lg="4" className="order-sm-2 order-xl-2">
        <Row>
          {UserAddress.map(({ iconClass, text, spanText }, index) => (
            <Col md="6" key={index}>
              <div className="ttl-info text-start">
                <h6 className="mb-1"><i className={`fa fa-${iconClass}`}></i>{text}</h6>
                <span>{spanText}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
export default InfoSection;