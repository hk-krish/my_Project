import { Card, CardBody, Col, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { ListWithCheckboxTitle } from "../../../Constants";
import { ListCheckboxData, ListWithCheckboxSubTitle } from "../../../Data/UiKits/Lists";

const ListWithCheckbox = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CommonCardHeader title={ListWithCheckboxTitle} span={ListWithCheckboxSubTitle} />
        <CardBody className="dark-list list-checkbox">
          <ListGroup>
            {ListCheckboxData &&
              ListCheckboxData.map((item, index) => (
                <ListGroupItem key={index}>
                  <Input className={`me-2 checkbox-${item.class} ${index === 0 ? "active" : ""}`} id={item.idFor} type="checkbox" value="" />
                  <Label className={`mb-0 txt-${item.class}`} htmlFor={item.idFor} check>
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
export default ListWithCheckbox;
