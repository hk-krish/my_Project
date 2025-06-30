import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { BorderSecondaryTitle } from "../../../Constants";
import { BorderPrimarySubTitle, BorderSecondaryData } from "../../../Data/BonusUi/CreativeCard";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const BorderSecondary = () => {
  return (
    <Col xs="12" xl="4">
      <Card>
        <CommonCardHeader title={BorderSecondaryTitle} span={BorderPrimarySubTitle} headClass="border-l-secondary border-2 pb-0" />
        <CardBody className="scroll-demo">
          <ListGroup numbered className="scroll-rtl">
            {BorderSecondaryData &&
              BorderSecondaryData.map((item, index) => (
                <ListGroupItem className="d-flex align-items-start flex-wrap" key={index}>
                  <div className="ms-2 me-auto">{item.text}</div>
                  <Badge color={item.class} className="rounded-pill p-2">
                    {item.text2}
                  </Badge>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BorderSecondary;
