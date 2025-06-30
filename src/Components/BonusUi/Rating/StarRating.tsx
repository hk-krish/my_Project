// @ts-nocheck
import { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";
import { StarRatingBar } from "../../../Constants";
import { StarRatingData } from "../../../Data/BonusUi/Rating";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const StarRating = () => {
  const [rating, setRating] = useState(1);

  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={StarRatingBar} span={StarRatingData} />
        <CardBody>
          <div className="rating">
            <Rating initialRating={rating} emptySymbol="text-primary star fa fa-star-o fa-2x" fullSymbol="text-primary star fa fa-star fa-2x" onChange={(rate) => setRating(rate)} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default StarRating;
