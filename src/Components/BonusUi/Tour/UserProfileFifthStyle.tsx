import { Card, Col, Row } from "reactstrap";
import CommonTourFooter from "./Common/CommonTourFooter";
import CommonTourHeader from "./Common/CommonTourHeader";
import CommonTourSocialMedia from "./Common/CommonTourSocialMedia";
import { Href } from "../../../Constants";
import { dynamicImage, Image } from "../../../Utils";

const UserProfileFifthStyle = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <Row className="g-2">
            <CommonTourHeader date="02 Feb" time="5 min read" />
            <Col sm="4" className="align-self-center mt-0 text-end">
              <CommonTourSocialMedia time="2 Yours ago" className="step9" />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg="12" xl="4">
              <div id="aniimated-thumbnials-3">
                <a href={Href}>
                  <Image className="img-fluid rounded" src={dynamicImage(`other-images/sidebar-bg.jpg`)} alt="nature" />
                </a>
              </div>
            </Col>
            <Col xl="6">
              <p className="block-ellipsis pt-xl-0 pt-3">The wind gives life to the planet. This unobservable, enigmatic energy has the power to revitalize a setting. Its absence can cause the world to become serenely motionless. Its strength is scarcely visible on bare mountain summits, but it becomes obvious in woods and on the water. Winds may be violent and even harmful. When we investigate it carefully Nature is not a destination. Home is here. Garry Snyder In a very real sense, our home, or natural environment, is made up of mountains and valleys, the seas and the sky, the sun and the soil, the trees and the flowers. Growing up in the contemporary, civilized environment, it's simple to start believing</p>
              <CommonTourFooter />
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default UserProfileFifthStyle;
