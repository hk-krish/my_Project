import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { Href, Purchase, SimplePricingTitle } from "../../../../Constants";
import { SimplePricingData } from "../../../../Data/Applications/ECommerce";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";

const SimplePricingCard = () => {
  return (
    <Card>
      <CommonCardHeader title={SimplePricingTitle} />
      <CardBody className="pricing-content">
        <Row className="g-sm-4 g-3">
          {SimplePricingData.map((item, index) => (
            <Col xl="3" sm="6" className="box-col-3" key={index}>
              <Card className="text-center pricing-simple">
                <CardBody>
                  <h3>{item.title}</h3>
                  <h2>${item.price}</h2>
                  <h3 className="mb-0">{item.plan}</h3>
                </CardBody>
                <div>
                  <Button block tag="a" color="primary" size="lg" href={Href} className="btn-block">{Purchase}</Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default SimplePricingCard;
