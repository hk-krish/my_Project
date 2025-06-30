import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { ContextualClassTitle } from "../../../Constants";
import { ContextualClassSubTitle, ContextualListData } from "../../../Data/UiKits/Lists";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const ContextualClass = () => {
  return (
    <Col xxl="6" sm="12" className="box-col-12">
      <Card className="height-equal context-list">
        <CommonCardHeader title={ContextualClassTitle} span={ContextualClassSubTitle} />
        <CardBody>
          <ListGroup>
            {ContextualListData &&
              ContextualListData.map((item, index) => (
                <ListGroupItem action className={item.class} key={index}>
                  {item.htmlText}
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ContextualClass;
