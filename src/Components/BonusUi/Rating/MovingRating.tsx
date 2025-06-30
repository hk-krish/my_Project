// @ts-nocheck
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";
import { MovieRatingBar } from "../../../Constants";
import { MovingRatingDta } from "../../../Data/BonusUi/Rating";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const MovingRating = () => {
  const [rating, setRating] = useState(2);
  const [status, setStatus] = useState("Mediocre");

  useEffect(() => {
    switch (rating) {
      case 1:
        setStatus("Bad");
        break;
      case 2:
        setStatus("Mediocre");
        break;
      case 3:
        setStatus("Good");
        break;

      default:
        setStatus("Awesome");
        break;
    }
  }, [rating]);

  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={MovieRatingBar} span={MovingRatingDta} />
        <CardBody className="m-2">
          <div className="rating">
            <Rating stop={4} initialRating={rating} emptySymbol="br-widget" fullSymbol="br-widget br-current" onChange={(rate: number) => setRating(rate)} />
            <span className="text-primary current-rating fs-6">{status}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MovingRating;
