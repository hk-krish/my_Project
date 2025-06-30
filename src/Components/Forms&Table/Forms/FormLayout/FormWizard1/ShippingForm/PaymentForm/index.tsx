import { ChangeEvent, Fragment, useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Row } from "reactstrap";
import { PaymentInformation, ProceedToBack, ProceedToNext } from "../../../../../../../Constants";
import { ActiveCallbackProp } from "../../../../../../../Types/FormsType";
import CashOnDelivery from "./CashOnDelivery";
import CreditCardOption from "./CreditCardOption";
import PayPalOption from "./PayPalOption";

const PaymentForm: React.FC<ActiveCallbackProp> = ({ activeCallBack }) => {
  const [payMethod, setPayMethod] = useState("");
  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setPayMethod(value);
  };
  const handleBackButton = () => activeCallBack(2);
  const handleNextButton = () => {
    if (payMethod !== "") activeCallBack(4);
    else return toast.error("please fill out all the fields before moving on to the next step");
  };

  return (
    <Fragment>
      <h6>{PaymentInformation}</h6>
      <p className="f-light">{"Fill up the following information to send you the order"}</p>
      <div className="payment-info-wrapper">
        <Row className="shipping-method g-3">
          <PayPalOption payMethod={payMethod} updateFormData={updateFormData} />
          <CreditCardOption payMethod={payMethod} updateFormData={updateFormData} />
          <CashOnDelivery payMethod={payMethod} updateFormData={updateFormData} />
          <Col xs="12" className="text-end">
            <Button onClick={handleBackButton} color="primary" className="me-1">
              <i className="fa fa-truck proceed-prev pe-2" />
              {ProceedToBack}
            </Button>
            <Button color="primary" onClick={handleNextButton}>
              {ProceedToNext}
              <i className="fa fa-truck proceed-next pe-2" />
            </Button>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
export default PaymentForm;
