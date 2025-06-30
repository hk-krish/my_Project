import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { NumberedBadgeListTitle } from "../../../Constants";
import { BadgeListData, NumBadgeListSubTitle } from "../../../Data/UiKits/Lists";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const NumberedBadgeList = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={NumberedBadgeListTitle} span={NumBadgeListSubTitle} />
        <CardBody>
          <ListGroup numbered className="badge-list">
            {BadgeListData &&
              BadgeListData.map((item, index) => (
                <ListGroupItem key={index}>
                  <div>{item.text}</div>
                  <Badge color={item.badgeClass} className="p-2" pill>
                    {item.badgeText}
                  </Badge>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default NumberedBadgeList