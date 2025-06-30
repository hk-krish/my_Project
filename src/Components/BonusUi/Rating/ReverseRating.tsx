// @ts-nocheck
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";
import { ReversedRatingBar } from "../../../Constants";
import { ReverseRatingData } from "../../../Data/BonusUi/Rating";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const ReverseRating = () => {
  const [rating, setRating] = useState(3);
  const [status, setStatus] = useState("Disagree");

  useEffect(() => {
    switch (rating) {
      case 1:
        setStatus("Strongly Disagree");
        break;
      case 2:
        setStatus("Agree");
        break;
      case 3:
        setStatus("Neither Agree or Disagree");
        break;
      case 4:
        setStatus("Disagree");
        break;
      default:
        setStatus("Strongly Disagree");
        break;
    }
  }, [rating]);

  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={ReversedRatingBar} span={ReverseRatingData} />
        <CardBody>
          <div className="rating reverse">
            <Rating
              initialRating={rating}
              emptySymbol={[...Array(5)].map((_,index) => (<span className="square-number active" key={index} />))}
              fullSymbol={[...Array(5)].map((_,index) => (<span className="square-number bg-primary border-primary" key={index} />))}
              direction="rtl"
              onChange={(rate: number) => setRating(rate)}
            />
            <span className="text-primary current-rating fs-6 ms-2">{status}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ReverseRating;
