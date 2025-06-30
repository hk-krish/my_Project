import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { BonusUi, Rating } from "../../../Constants";
import HalfStarRating from "./HalfStarRating";
import HeartRating from "./HeartRating";
import MovingRating from "./MovingRating";
import PillRating from "./PillRating";
import ReverseRating from "./ReverseRating";
import SimpleRatingBar from "./SimpleRatingBar";
import SquareRating from "./SquareRating";
import StarRating from "./StarRating";
import ThumbUpDown from "./ThumbUpDown";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const RatingContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Rating} parent={BonusUi} />
      <Container fluid>
        <Row>
          <SimpleRatingBar />
          <MovingRating />
          <SquareRating />
          <PillRating />
          <ReverseRating />
          <StarRating />
          <HalfStarRating />
          <ThumbUpDown />
          <HeartRating />
        </Row>
      </Container>
    </Fragment>
  );
};

export default RatingContainer;
