import { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import { AddFriend, FollowingsTitle, Href } from "../../../../../Constants";
import { FollowingData } from "../../../../../Data/Applications/SocialApp";
import { dynamicImage, Image } from "../../../../../Utils";
import HeaderWithIcon from "../HeaderWithIcon";
import { Link } from "react-router-dom";

const FollowingsCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={FollowingsTitle} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Collapse isOpen={isOpen}>
        <CardBody className="social-list filter-cards-view">
          {FollowingData.map((data, index) => (
            <div className="d-flex" key={index}>
              <Image className="img-50 img-fluid m-r-20 rounded-circle" alt="image" src={dynamicImage(`user/${data.imageName}`)} />
              <div className="flex-grow-1">
                <span className="d-block">{data.name}</span>
                <Link to={Href}>{AddFriend}</Link>
              </div>
            </div>
          ))}
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default FollowingsCard;
