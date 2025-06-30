import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { FlushListTitle } from "../../../Constants";
import { FlushListSubTitle } from "../../../Data/UiKits/Lists";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const FlushList = () => {
  return (
    <Col xl="4" md="12">
      <Card>
        <CommonCardHeader title={FlushListTitle} span={FlushListSubTitle} />
        <CardBody>
          <ListGroup flush>
            <ListGroupItem><i className="icofont icofont-arrow-right"> </i>{"PRODUCT"}</ListGroupItem>
            <ListGroupItem><i className="icofont icofont-arrow-right"> </i>{" PRODUCT DETAILS"}</ListGroupItem>
            <ListGroupItem><i className="icofont icofont-arrow-right"> </i>{"CART"}</ListGroupItem>
            <ListGroupItem><i className="icofont icofont-arrow-right"> </i>{"CHECKOUT"}</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default FlushList;
