import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { ScrollableListTitle } from "../../../Constants";
import { ScrollableListData, ScrollableListSubTitle } from "../../../Data/UiKits/Lists";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const ScrollableList = () => {
  return (
    <Col xxl="4">
      <Card>
        <CommonCardHeader title={ScrollableListTitle} span={ScrollableListSubTitle} />
        <CardBody>
          <ListGroup className="pt-0 main-lists-content scrollbar-wrapper custom-scrollbar">
            {ScrollableListData &&
              ScrollableListData.map((item, index) => (
                <ListGroupItem action className={`list-hover-primary ${index === 0 ? " active" : ""}`} key={index}>
                  <div className="list-wrapper gap-0">
                    <Image className="list-img" src={dynamicImage(`user/${item.image}`)} alt="profile" />
                    <div className="list-content">
                      <h6>{item.head}</h6>
                      <p>{item.mail}</p>
                      <small className={index !== 0 ? "text-muted" : ""}>{item.small}</small>
                    </div>
                  </div>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ScrollableList;
