import { Card, CardBody, Col } from "reactstrap";
import { dynamicImage, Image } from "../../../../../../Utils";
import CommentsBox from "../NewUserClass/CommentsBox";
import LikeContent from "../NewUserClass/LikeContent";
import NewUsersSocial from "../NewUserClass/NewUsersSocial";
import SocialChat from "./SocialChat";

const NewUserClass2 = () => {
  return (
    <Col sm="12">
      <Card>
        <CardBody>
          <NewUsersSocial />
          <Image className="img-fluid" alt="user12" src={dynamicImage(`social-app/timeline-2.png`)} />
          <div className="timeline-content">
            <p>The only way to do something in depth is to work hard. I've always thought of the T-shirt as the Alpha of the fashion alphabet. My breakfast is very important. Everything I do is a matter of heart, body and soul.</p>
            <LikeContent />
            <SocialChat />
            <CommentsBox />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewUserClass2;
