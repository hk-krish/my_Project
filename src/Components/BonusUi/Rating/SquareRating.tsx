// @ts-nocheck
import { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";
import { SquareRatingBar } from "../../../Constants";
import { SquareRatingData } from "../../../Data/BonusUi/Rating";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const SquareRating = () => {
  const [rating, setRating] = useState(1);

  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={SquareRatingBar} span={SquareRatingData} />
        <CardBody>
          <div className="rating">
            <Rating
              initialRating={rating}
              emptySymbol={[...Array(5)].map((_,index) => (<span className="square-number" key={index}>{index + 1}</span>))}
              fullSymbol={[...Array(5)].map((_,index) => (<span className="square-number active" key={index}>{index + 1}</span>))}
              onChange={(rate) => setRating(rate)}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default SquareRating;
