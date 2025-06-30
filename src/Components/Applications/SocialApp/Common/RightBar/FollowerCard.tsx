import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Collapse } from "reactstrap";
import { AddFriend, Followers, Href } from "../../../../../Constants";
import { FollowerData } from "../../../../../Data/Applications/SocialApp";
import { dynamicImage, Image } from "../../../../../Utils";
import HeaderWithIcon from "../HeaderWithIcon";

const FollowerCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={Followers} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Collapse isOpen={isOpen}>
        <CardBody className="social-list filter-cards-view">
          {FollowerData.map((data, index) => (
            <div className="d-flex" key={index}>
              <Image className="img-50 img-fluid m-r-20 rounded-circle" alt="img" src={dynamicImage(`user/${data.imageName}`)} />
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

export default FollowerCard;
