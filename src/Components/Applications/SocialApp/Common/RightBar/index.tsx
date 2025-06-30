import { Card, Col, Row } from "reactstrap";
import FollowerCard from "./FollowerCard";
import FollowingsCard from "./FollowingsCard";
import FriendsCard from "./FriendsCard";
import LatestPhotos from "./LatestPhotos";
import ProfileIntroCard from "./ProfileIntroCard";
import { dynamicImage, Image } from "../../../../../Utils";

const RightBar = () => {
  return (
    <Row>
      <Col xl="12" className="xl-50 box-col-6">
        <ProfileIntroCard />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <FollowerCard />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <FollowingsCard />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <LatestPhotos />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <FriendsCard />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <Card>
          <Image className="img-fluid rounded-3 w-100" src={dynamicImage(`social-app/timeline-4.png`)} alt="timeline" />
        </Card>
      </Col>
    </Row>
  );
};

export default RightBar;
