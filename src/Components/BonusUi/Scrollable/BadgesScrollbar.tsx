import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { BadgesScrollbarTitle } from "../../../Constants";
import { BadgeScrollData, BadgesScrollSubTitle } from "../../../Data/BonusUi/Scrollable";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import ScrollBar from "react-perfect-scrollbar";

const BadgesScrollbar = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={BadgesScrollbarTitle} span={BadgesScrollSubTitle} />
        <CardBody>
          <ScrollBar className="vertical-scroll scroll-demo scroll-b-none custom-container">
            <ListGroup numbered className="scroll-rtl">
              {BadgeScrollData &&
                BadgeScrollData.map((item, index) => (
                  <ListGroupItem className={`d-flex align-items-start flex-wrap ${index === BadgeScrollData.length - 1 ? "justify-content-between" : ""}`} key={index}>
                    <div className="ms-2 me-auto">{item.text}</div>
                    <Badge color={item.class} className="p-2" pill>
                      {item.badge}
                    </Badge>
                  </ListGroupItem>
                ))}
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BadgesScrollbar;
