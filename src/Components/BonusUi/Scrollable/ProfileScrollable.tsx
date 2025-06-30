import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { ProfileScrollableTitle } from "../../../Constants";
import { ProfileScrollData, ProfileScrollSubTitle } from "../../../Data/BonusUi/Scrollable";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import ScrollBar from "react-perfect-scrollbar";

const ProfileScrollable = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={ProfileScrollableTitle} span={ProfileScrollSubTitle} />
        <CardBody>
          <ScrollBar className="vertical-scroll scroll-demo scroll-b-none custom-container">
            <ListGroup>
              {ProfileScrollData &&
                ProfileScrollData.map((item, index) => (
                  <ListGroupItem action className="list-hover-primary" key={index}>
                    <Image className="rounded-circle" src={dynamicImage(`user/${item.image}`)} alt="user" />
                    {item.text}
                  </ListGroupItem>
                ))}
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ProfileScrollable;
