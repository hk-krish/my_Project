import { Button, Card, CardBody, Col, Form, Row } from "reactstrap";
import { Emi, FirstName, LastName, Pincode, Submit } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import FormGroupCommon from "./Common/FormGroupCommon";
import SelectCommon from "./Common/SelectCommon";
import { EmiBankSelect, EmiCardSelect, EmiYearSelect } from "../../../../Data/Applications/ECommerce";

const EmiForm = () => {
  return (
    <Col xxl="4" lg="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={Emi} headClass="pb-0"/>
        <CardBody>
          <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormGroupCommon type="text" placeholder={FirstName} formClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder={LastName} formClass="col-6" />
              <FormGroupCommon type="text" placeholder={Pincode} formClass="col-6 p-r-0" />
              <SelectCommon size={1} data={EmiBankSelect} selectClass="col-6" />
              <SelectCommon size={1} data={EmiCardSelect} selectClass="col-12" />
              <SelectCommon size={1} data={EmiYearSelect} selectClass="col-12" />
              <Col xs="12" className="mb-3">
                <ul className="payment-opt">
                  <li><Image src={dynamicImage(`ecommerce/mastercard.png`)} /></li>
                  <li><Image src={dynamicImage(`ecommerce/visa.png`)} /></li>
                  <li><Image src={dynamicImage(`ecommerce/paypal.png`)} /></li>
                </ul>
              </Col>
              <Col xs="12">
                <Button color="primary">{Submit}</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EmiForm;
