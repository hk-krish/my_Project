import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { ListWithNumberTitle } from "../../../Constants";
import { ListWithNumberSubTitle, NumberListData } from "../../../Data/UiKits/Lists";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const ListWithNumber = () => {
  return (
    <Col xl="4" xs="12">
      <Card>
        <CommonCardHeader title={ListWithNumberTitle} span={ListWithNumberSubTitle} />
        <CardBody>
          <ListGroup numbered>
            {NumberListData &&
              NumberListData.map((item, index) => (
                <ListGroupItem className={`fw-bold ${item.class}`} key={index}>
                  {item.text}
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ListWithNumber;
