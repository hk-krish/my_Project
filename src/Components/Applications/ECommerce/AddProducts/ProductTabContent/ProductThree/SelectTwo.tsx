import { Col, Label, Row } from "reactstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { MultiWithHeaderData } from "../../../../../../Data/Applications/ECommerce";
import { AddTag } from "../../../../../../Constants";

const SelectTwo = () => {
  return (
    <Col sm="6">
      <Row className="g-2 product-tag">
        <Col xs="12">
          <Label className="d-block m-0" for="validationServer01" check>{AddTag}<span className="text-danger"> *</span></Label>
        </Col>
        <Col xs="12">
          <Typeahead id="multiple-typeahead" labelKey="name" multiple options={MultiWithHeaderData} defaultSelected={["watches","sports","clothes","bottles"]}/>
          <p className="f-light">Products can be tagged</p>
        </Col>
      </Row>
    </Col>
  );
};

export default SelectTwo;
