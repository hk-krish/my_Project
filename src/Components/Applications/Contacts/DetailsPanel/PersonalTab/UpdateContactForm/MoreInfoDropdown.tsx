import { Col, Input, Label, Row } from "reactstrap";
import { dayList, monthList } from "../../../../../../Data/Applications/Contacts";

const MoreInfoDropdown = () => {
  return (
    <>
      <Col md="12" className="mt-0 mb-3">
        <Row>
          <Col sm="4" lg="2">
            <Input type="select" id="birth_day">
              <option className="f-w-600">{"Day"}</option>
              {dayList.map((list, i) => (<option key={i}>{list}</option>))}
            </Input>
          </Col>
          <Col sm="4" lg="3">
            <Input type="select">
              <option className="f-w-600">{"Month"}</option>
              {monthList.map((list, index) => (<option key={index}>{list}</option>))}
            </Input>
          </Col>
          <Col sm="4" lg="3">
            <Input id="birth_year" type="text" />
          </Col>
        </Row>
      </Col>
      <Col md="12" className="mt-0 mb-3">
        <Row>
          <Col sm="6">
            <Label>{"Personality"}</Label>
            <Input type="text" required />
          </Col>
          <Col sm="6">
            <Label>{"Interest"}</Label>
            <Input type="text" required />
          </Col>
        </Row>
      </Col>
    </>
  );
};
export default MoreInfoDropdown;