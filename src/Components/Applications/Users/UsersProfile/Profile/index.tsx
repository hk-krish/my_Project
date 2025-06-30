import { Card, Col } from "reactstrap";
import { dynamicImage, Image } from "../../../../../Utils";
import InfoSection  from "./InfoSection";
import SocialMediaAndFollow from "./SocialMediaAndFollow";

const Profile = () => {
  return (
    <Col sm="12">
      <Card className="hovercard text-center user-profile-card">
        <div className="cardheader"></div>
        <div className="user-image">
          <div className="avatar">
            <Image src={dynamicImage(`user/7.jpg`)} alt="user" />
          </div>
          <div className="icon-wrapper">
            <i className="icofont icofont-pencil-alt-5"></i>
          </div>
        </div>
        <div className="info">
          <InfoSection />
          <hr />
          <SocialMediaAndFollow />
        </div>
      </Card>
    </Col>
  );
};

export default Profile;
