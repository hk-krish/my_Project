import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { ScrollableContentTitle } from "../../../Constants";
import { ScrollContentSubTitle, ScrollableContentData } from "../../../Data/BonusUi/Scrollable";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import ScrollBar from "react-perfect-scrollbar";

const ScrollableContent = () => {
  return (
    <Col xxl="4" md="12">
      <Card>
        <CommonCardHeader title={ScrollableContentTitle} span={ScrollContentSubTitle} />
        <CardBody>
          <ScrollBar className="vertical-scroll scroll-demo scroll-b-none custom-container">
            <ListGroup className="main-lists-content">
              {ScrollableContentData &&
                ScrollableContentData.map((item, index) => (
                  <ListGroupItem action className={`list-hover-primary${index === 0 ? " active" : ""}`} key={index}>
                    <div className="list-wrapper gap-0">
                      <Image className="list-img" src={dynamicImage(`user/${item.image}`)} alt="profile" />
                      <div className="list-content">
                        <h4 className="f-w-600">{item.head}</h4>
                        <p>{item.mail}</p>
                        <small className={index !== 0 ? "text-muted" : ""}>{item.small}</small>
                      </div>
                    </div>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ScrollableContent;
