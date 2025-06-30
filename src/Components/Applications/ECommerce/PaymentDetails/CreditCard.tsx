import { Card, CardBody, Col, Form, Row } from "reactstrap";
import { CardNumber, CreditCards, FirstName, NameOnCard } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import FormGroupCommon from "./Common/FormGroupCommon";
import SelectCommon from "./Common/SelectCommon";
import { CreditSelect } from "../../../../Data/Applications/ECommerce";

const CreditCard = () => {
  return (
    <Col xxl="8" className="box-col-12">
      <Card>
        <CommonCardHeader title={CreditCards} headClass="pb-0"/>
        <CardBody>
          <Row>
            <Col md="7" className="order-md-0 order-1">
              <Form className="theme-form mega-form">
                <FormGroupCommon type="text" placeholder={CardNumber} />
                <FormGroupCommon type="text" placeholder={FirstName} />
                <FormGroupCommon type="date" />
                <FormGroupCommon type="text" placeholder={NameOnCard} />
                <SelectCommon data={CreditSelect} size={1} />
              </Form>
            </Col>
            <Col md="5" className="text-center bg-img-cover">
              <Image className="img-fluid" src={dynamicImage(`ecommerce/card.png`)} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CreditCard;
