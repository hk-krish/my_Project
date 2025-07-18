import { Button, Card, CardBody, Col, Form, Row } from "reactstrap";
import { AcHolderName, AccountNumber, EnterMobileNumber, IcfcCode, NetBankings, OtherDetails, Submit } from "../../../../Constants";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import FormGroupCommon from "./Common/FormGroupCommon";
import SelectCommon from "./Common/SelectCommon";
import { EmiBankSelect } from "../../../../Data/Applications/ECommerce";

const NetBanking = () => {
  return (
    <Col xxl="4" lg="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={NetBankings} headClass="pb-0"/>
        <CardBody>
          <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormGroupCommon type="text" placeholder={AcHolderName} formClass="col-12" />
              <FormGroupCommon type="text" placeholder={AccountNumber} formClass="col-12" />
              <SelectCommon size={1} data={EmiBankSelect} selectClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder={IcfcCode} formClass="col-6" />
              <FormGroupCommon type="number" placeholder={EnterMobileNumber} formClass="col-12" />
              <FormGroupCommon type="text" placeholder={OtherDetails} formClass="col-12" />
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

export default NetBanking;
