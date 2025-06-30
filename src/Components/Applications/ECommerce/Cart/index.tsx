import { Fragment } from "react";
import { Card, CardBody, Col, Container } from "reactstrap";
import { CartTitle, ECommerce } from "../../../../Constants";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { CartData } from "./CartData";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const CartContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={CartTitle} parent={ECommerce} />
      <Container fluid>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={CartTitle} />
            <CardBody>
              <CartData />
            </CardBody>
          </Card>
        </Col>
      </Container>
    </Fragment>
  );
};

export default CartContainer;
