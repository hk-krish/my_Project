import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { ActiveListTitle, ApexCharts, StarterKits, UIKits, WowAnimations } from "../../../Constants";
import { ActiveListSubTitle } from "../../../Data/UiKits/Lists";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const ActiveList = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CommonCardHeader title={ActiveListTitle} span={ActiveListSubTitle} />
        <CardBody>
          <ListGroup>
            <ListGroupItem active className="bg-warning-light"><i className="icofont icofont-arrow-right" /> {UIKits}</ListGroupItem>
            <ListGroupItem><i className="icofont icofont-arrow-right" /> {WowAnimations}</ListGroupItem>
            <ListGroupItem><i className="icofont icofont-arrow-right" /> {ApexCharts}</ListGroupItem>
            <ListGroupItem><i className="icofont icofont-arrow-right" /> {StarterKits}</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ActiveList;
