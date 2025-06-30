import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { DisableListTitle } from "../../../Constants";
import { DisableListData, DisableListSubTitle } from "../../../Data/UiKits/Lists";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const DisableList = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={DisableListTitle} span={DisableListSubTitle} />
        <CardBody>
          <ListGroup>
            {DisableListData &&
              DisableListData.map((item, index) => (
                <ListGroupItem action className={`${item.class}`} key={index}>
                  <Image className="rounded-circle" src={dynamicImage(`user/${item.image}`)} alt="user" />
                  {item.text}
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DisableList;
