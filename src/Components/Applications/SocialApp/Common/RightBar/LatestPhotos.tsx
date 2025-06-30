import { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import { LatestPhotosTitle } from "../../../../../Constants";
import { dynamicImage, Image } from "../../../../../Utils";
import HeaderWithIcon from "../HeaderWithIcon";

const LatestPhotos = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={LatestPhotosTitle} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Collapse isOpen={isOpen}>
      <CardBody className="photos filter-cards-view">
        <ul className="text-center">
          {[...Array(8)].map((_, index) => (
            <li key={index}>
              <div className="latest-post">
                <Image className="img-fluid" alt="user" src={dynamicImage(`social-app/post-${index + 1}.png`)}/>
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
    </Collapse>
    </Card>
  );
};

export default LatestPhotos;
