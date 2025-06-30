import { Col, Container, Row } from "reactstrap";
import BecomeMember from "./BecomeMember";
import SimplePricingCard from "./SimplePricingCard";
import { ECommerce, Pricing } from "../../../../Constants";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const PricingContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Pricing} parent={ECommerce} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <BecomeMember />
            <SimplePricingCard />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default PricingContainer;
