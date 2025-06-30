import { Card, CardBody, Col, Form, Input, Label, Row } from "reactstrap";
import { FlatInputStyleTitle, MultiplePaintingTitle, PleaseComments, RomanNumberTitle } from "../../../../../Constants";
import { FlatInputStyleSubTitle, MultiplePaintingFlatData, RomanFlatInputData } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonSelectDropdown from "../../Common/CommonSelectDropdown";

const FlatInputStyle = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FlatInputStyleTitle} span={FlatInputStyleSubTitle} />
        <Form className="theme-form dark-inputs">
          <CardBody> 
            <Row><CommonSelectDropdown title={RomanNumberTitle} inputClass="btn-square digits" options={RomanFlatInputData} /></Row>
            <Row><CommonSelectDropdown title={MultiplePaintingTitle} options={MultiplePaintingFlatData} inputClass="btn-square digits custom-scrollbar" multiple={true} optionClass="rounded-0" /></Row>
            <Row>
              <Col>
                <div>
                  <Label>{PleaseComments}</Label>
                  <Input type="textarea" className="btn-square" rows="3"></Input>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Form>
      </Card>
    </Col>
  );
};
export default FlatInputStyle;
