//@ts-nocheck
import { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { RatingBars } from "../../../Constants";
import { BarRatingData } from "../../../Data/BonusUi/Rating";

const SimpleRatingBar = () => {
  const [rating, setRating] = useState(7);
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={RatingBars} span={BarRatingData} />
        <CardBody>
          <div className="rating">
            <Rating stop={10} initialRating={rating} emptySymbol="br-selected" fullSymbol="br-selected br-current" onChange={(rate) => setRating(rate)} />
            <span className="current-rating text-primary">{rating}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default SimpleRatingBar;
