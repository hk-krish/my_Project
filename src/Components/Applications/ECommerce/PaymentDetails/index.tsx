import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { ECommerce, PaymentDetails } from "../../../../Constants";
import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import CodForm from "./CodForm";
import EmiForm from "./EmiForm";
import NetBanking from "./NetBanking";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const PaymentDetailsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={PaymentDetails} parent={ECommerce} />
      <Container fluid className="credit-card">
        <Row>
          <CreditCard />
          <DebitCard />
          <CodForm />
          <EmiForm />
          <NetBanking />
        </Row>
      </Container>
    </Fragment>
  );
};

export default PaymentDetailsContainer;
