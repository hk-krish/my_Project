import { Card, CardBody, Col, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { ListWithRadioTitle } from "../../../Constants";
import { ListRadioData, ListWithRadioSubTitle } from "../../../Data/UiKits/Lists";

const ListWithRadio = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CommonCardHeader title={ListWithRadioTitle} span={ListWithRadioSubTitle} />
        <CardBody>
          <ListGroup>
            {ListRadioData &&
              ListRadioData.map((item, index) => (
                <ListGroupItem key={index}>
                  <Input className={`me-2 ${item.class}`} id={`firstRadio${index}`} type="radio" name="listGroupRadio" defaultChecked={item.check ? true : false} />
                  <Label className="mb-0" htmlFor={`firstRadio${index}`} check>
                    {item.text}
                  </Label>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ListWithRadio;
