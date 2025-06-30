import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { DefaultListTitle, ECommerce, LogoDesign, SEO, WebDesignDevelop } from "../../../Constants";
import { DefaultListSubTitle } from "../../../Data/UiKits/Lists";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const DefaultList = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CommonCardHeader title={DefaultListTitle} span={DefaultListSubTitle} />
        <CardBody>
          <ListGroup>
            <ListGroupItem><i className="icofont icofont-arrow-right" />{LogoDesign}</ListGroupItem>
            <ListGroupItem><i className="icofont icofont-arrow-right" />{WebDesignDevelop}</ListGroupItem>
            <ListGroupItem><i className="icofont icofont-arrow-right" />{ECommerce}</ListGroupItem>
            <ListGroupItem><i className="icofont icofont-arrow-right" />{SEO}</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DefaultList