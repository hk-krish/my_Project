import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { BorderPrimaryTitle } from "../../../Constants";
import { BorderPrimaryData, BorderPrimarySubTitle } from "../../../Data/BonusUi/CreativeCard";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const BorderPrimary = () => {
  return (
    <Col md="6" xl="4">
      <Card>
        <CommonCardHeader title={BorderPrimaryTitle} span={BorderPrimarySubTitle} headClass="border-l-primary border-3 pb-0" />
        <CardBody>
          <ListGroup>
            {BorderPrimaryData.map((item) => (
              <ListGroupItem action className={`${item.id === 1 ? "active" : ""}`} key={item.id}>
                <Image className="rounded-circle" src={dynamicImage(`user/${item.image}`)} alt="user" />
                {item.name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BorderPrimary;
