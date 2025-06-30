import { Card, CardBody, Container, Row } from "reactstrap";
import { BillingDetails, CheckOutTitle, ECommerce } from "../../../../Constants";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import CheckoutTableData from "./CheckoutTableData";
import ProductCheckout from "./ProductCheckout";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const CheckOutContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={CheckOutTitle} parent={ECommerce} />
      <Container fluid>
        <Card className="checkout custom-billing-details">
          <CommonCardHeader title={BillingDetails} headClass="pb-0"/>
          <CardBody>
            <Row>
              <CheckoutTableData />
              <ProductCheckout />
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default CheckOutContainer;
