import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { BorderWarningTitle } from "../../../Constants";
import { BorderPrimarySubTitle, BorderWarningData } from "../../../Data/BonusUi/CreativeCard";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const BorderWarning = () => {
  return (
    <Col md="6" xl="4">
      <Card>
        <CommonCardHeader title={BorderWarningTitle} span={BorderPrimarySubTitle} headClass="border-l-warning border-3 pb-0" />
        <CardBody>
          <ListGroup numbered>
            {BorderWarningData.map((item) => (
              <ListGroupItem className={`txt-${item.color} f-w-500`} key={item.id}>
                {item.text}
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BorderWarning;
