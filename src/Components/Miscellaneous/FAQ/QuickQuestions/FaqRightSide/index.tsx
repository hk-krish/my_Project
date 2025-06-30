import { Col, Row } from "reactstrap";
import LatestUpdates from "./LatestUpdates";
import NavigationCard from "./NavigationCard";
import SearchArticle from "./SearchArticle";

const FaqRightSide = () => {
  return (
    <Col xl="4" lg="6" md="5" className="xl-40">
      <Row>
        <SearchArticle />
        <NavigationCard />
        <LatestUpdates />
      </Row>
    </Col>
  );
};
export default FaqRightSide;
