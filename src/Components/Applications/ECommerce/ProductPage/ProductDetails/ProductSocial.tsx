import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { Col, Row } from "reactstrap";
import { ShareIt } from "../../../../../Constants";
import { ProductSocialLinks } from "../../../../../Data/Applications/ECommerce";

export const ProductSocial = () => {
  return (
    <Fragment>
      <Row className="py-1">
        <Col md="4">
          <h4 className="product-title">{ShareIt}</h4>
        </Col>
        <Col md="8">
          <div className="product-icon">
            <ul className="product-social">
              {ProductSocialLinks.map((item, index) => (
                <li className="d-inline-block" key={index}>
                  <Link to={item.link} target="_blank">
                    <i className={item.text}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
      <hr />
    </Fragment>
  );
};