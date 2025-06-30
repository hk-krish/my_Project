import { Button, Card, CardBody, CardHeader, Col } from "reactstrap";
import { AddFriend } from "../../../../../Constants";
import { PeopleKnowData } from "../../../../../Data/Applications/SocialApp";
import { PeopleYouMayKnowProp } from "../../../../../Types/Applications";
import { dynamicImage, Image } from "../../../../../Utils";

const PeopleYouMayKnow:React.FC<PeopleYouMayKnowProp> = ({ heading }) => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader>
          <h4>{heading}</h4>
        </CardHeader>
        <CardBody className="avatar-showcase">
          <div className="pepole-knows">
            <ul className="flex-wrap">
              {PeopleKnowData.map((data, index) => (
                <li key={index}>
                  <div className="add-friend text-center">
                    <Image className="img-60 img-fluid rounded-circle" alt="user" src={dynamicImage(`${data.peopleImageName}`)} />
                    <span className="d-block">{data.peopleName}</span>
                    <Button color="primary" size="xs">{AddFriend}</Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PeopleYouMayKnow;
