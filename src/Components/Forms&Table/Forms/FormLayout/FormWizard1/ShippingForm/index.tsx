import { useCallback, useState } from "react";
import { Card, CardBody, Col, Row, TabContent, TabPane } from "reactstrap";
import { ShippingFormTitle } from "../../../../../../Constants";
import { ShippingFormSubTitle } from "../../../../../../Data/Forms&Table/Forms/FormLayout";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import FinishForm from "../../Common/FinishForm";
import BillingForm from "./BillingForm";
import CurrentCart from "./CurrentCart";
import PaymentForm from "./PaymentForm";
import ShippingFormContent from "./ShippingFormContent";
import ShippingFormNav from "./ShippingFormNav";

const ShippingForm = () => {
  const [steps, setSteps] = useState(1);
  const activeCallBack = useCallback((tab: number) => setSteps(tab), []);
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={ShippingFormTitle} span={ShippingFormSubTitle} />
        <CardBody>
          <Row className="shopping-wizard">
            <Col xs="12">
              <Row className="shipping-form g-5">
                <Col xl="8" className="shipping-border">
                  <ShippingFormNav activeCallBack={activeCallBack} steps={steps} />
                  <TabContent className="dark-field shipping-content" activeTab={steps}>
                    <TabPane tabId={1}><BillingForm activeCallBack={activeCallBack} /></TabPane>
                    <TabPane tabId={2} className="shipping-wizard"><ShippingFormContent activeCallBack={activeCallBack} /></TabPane>
                    <TabPane tabId={3} className="shipping-wizard"><PaymentForm activeCallBack={activeCallBack} /></TabPane>
                    <TabPane tabId={4} className="shipping-wizard finish-wizard1"><FinishForm /></TabPane>
                  </TabContent>
                </Col>
                <CurrentCart />
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ShippingForm;
