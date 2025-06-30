import { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import { ActivityFeedTitle, Href } from "../../../../../Constants";
import { FriendData } from "../../../../../Data/Applications/SocialApp";
import { dynamicImage, Image } from "../../../../../Utils";
import HeaderWithIcon from "../HeaderWithIcon";
import { Link } from "react-router-dom";

const ActivityFeedClass = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={ActivityFeedTitle} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Collapse isOpen={isOpen}>
        <CardBody className="social-status filter-cards-view">
          {FriendData.map((data, index) => (
            <div className="d-flex" key={index}>
              <Image className="img-50 rounded-circle m-r-15" src={dynamicImage(`user/${data.imageName}`)} alt="user" />
              <div className="flex-grow-1">
                <span className="f-w-600 d-block">{data.title}</span>
                <p>Commented on Shaun Park's <Link to={Href}>Photo</Link></p>
                <span className="light-span">{data.time} Ago</span>
              </div>
            </div>
          ))}
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default ActivityFeedClass;
