import { Col, Row } from "reactstrap";

const FollowSection = () => {
  return (
    <div className="follow">
      <Row>
        <Col sm="6" className="border-end">
          <div className="follow-num counter">25.8K</div>
          <span>{"Follower"}</span>
        </Col>
        <Col sm="6">
          <div className="follow-num counter">65.2M</div>
          <span>{"Following"}</span>
        </Col>
      </Row>
    </div>
  );
};
export default FollowSection;