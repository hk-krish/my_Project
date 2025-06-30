// @ts-nocheck
import { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";
import { ThumbUpDownRate } from "../../../Constants";
import { ThumbUpDownData } from "../../../Data/BonusUi/Rating";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const ThumbUpDown = () => {
  const [thumbs, setThumbs] = useState(4);
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={ThumbUpDownRate} span={ThumbUpDownData} />
        <CardBody>
          <div className="rating">
            <Rating initialRating={thumbs} emptySymbol="text-primary fa fa-thumbs-down fa-2x" fullSymbol="text-primary fa fa-thumbs-up fa-2x" onClick={(rate) => setThumbs(rate)} />
            <span className="text-primary ms-2 mt-1 current-rating">{thumbs}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ThumbUpDown;
