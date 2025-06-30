import { useState } from "react";
import { Button, Card, CardBody, Collapse } from "reactstrap";
import { Likes, MyProfileTitle, View } from "../../../../../../Constants";
import { dynamicImage, Image } from "../../../../../../Utils";
import HeaderWithIcon from "../../HeaderWithIcon";
import MessagesAndNotification from "./MessagesAndNotification";
import SocialGroup from "./SocialGroup";

const MyProfileClass = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={MyProfileTitle} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Collapse isOpen={isOpen}>
        <CardBody className="socialprofile filter-cards-view">
          <div className="d-flex">
            <Image className="img-50 img-fluid m-r-20 rounded-circle" src={dynamicImage(`user/1.jpg`)} alt="user" />
            <MessagesAndNotification />
          </div>
          <div className="social-btngroup d-flex">
            <Button color="primary" className="text-center">{Likes}</Button>&nbsp;
            <Button color="light" className="text-center ms-2">{View}</Button>
          </div>
          <div className="likes-profile text-center">
            <h5><span><i className="fa fa-heart font-danger" /> 884</span></h5>
          </div>
          <div className="text-center">35 New Likes This Week</div>
          <div className="customers text-center social-group"><SocialGroup /></div>
          <Image className="img-fluid mt-5" alt="" src={dynamicImage(`social-app/timeline-3.png`)} />
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default MyProfileClass;
