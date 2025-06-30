import { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import HeaderWithIcon from "../HeaderWithIcon";
import { FriendsTitle } from "../../../../../Constants";
import { FriendsImages } from "../../../../../Data/Applications/SocialApp";
import { dynamicImage, Image } from "../../../../../Utils";

const FriendsCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={FriendsTitle} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Collapse isOpen={isOpen}>
        <CardBody className="avatar-showcase filter-cards-view">
          {FriendsImages.map((data, index) => (
            <div className="d-inline-block friend-pic" key={index}>
              <Image className="img-50 rounded-circle" src={dynamicImage(`user/${data}`)} alt="images"/>
            </div>
          ))}
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default FriendsCard;
