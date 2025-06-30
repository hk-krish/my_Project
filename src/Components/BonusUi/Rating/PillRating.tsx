// @ts-nocheck
import { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";
import { PillRatingBar } from "../../../Constants";
import { PillRatingData } from "../../../Data/BonusUi/Rating";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const PillRating = () => {
  const [rating, setRating] = useState(1);
  const pillData = ["A", "B", "C", "D", "E"];

  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={PillRatingBar} span={PillRatingData} />
        <CardBody>
          <div className="rating pill-rating-list">
            <Rating
              initialRating={rating}
              emptySymbol={pillData.map((n: string) => (<span className="pill-rating" key={n}>{n}</span>))}
              fullSymbol={pillData.map((n: string) => (<span className="pill-rating br-current" key={n}>{n}</span>))}
              onClick={(rate) => setRating(rate)}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default PillRating;
