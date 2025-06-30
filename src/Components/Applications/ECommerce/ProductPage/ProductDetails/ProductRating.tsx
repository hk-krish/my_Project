import { Fragment } from "react";
import { Rating } from "react-simple-star-rating";
import { Col, Row } from "reactstrap";
import { RateNow } from "../../../../../Constants";

export const ProductRating = () => {
  return (
    <Fragment>
      <Row>
        <Col md="4">
          <h4 className="product-title">{RateNow}</h4>
        </Col>
        <Col md="8">
          <div className="d-flex">
            <div className="rating">
              <Rating initialValue={3} size={17} />
            </div>
            <span className="ms-2">(250 review)</span>
          </div>
        </Col>
      </Row>
      <hr />
    </Fragment>
  );
};
