import { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import { MutualFriendsTitle } from "../../../../../Constants";
import { MutualFriendList } from "../../../../../Data/Applications/SocialApp";
import { dynamicImage, Image } from "../../../../../Utils";
import HeaderWithIcon from "../HeaderWithIcon";

const MutualFriends = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={MutualFriendsTitle} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Collapse isOpen={isOpen}>
        <CardBody className="social-status filter-cards-view">
          {MutualFriendList.map((data, index) => (
            <div className="d-flex" key={index}>
              <Image className="img-50 rounded-circle m-r-15" src={dynamicImage(`user/${data.imageName}`)} alt="user" />
              <div className={`social-status ${data.socialClass}`} />
              <div className="flex-grow-1">
                <span className="d-block">{data.title}</span>
                <span className="d-block">{data.email}</span>
              </div>
            </div>
          ))}
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default MutualFriends;
