import { Col, FormGroup, Input, Label } from "reactstrap";
import { PaymentFormProps } from "../../../../../../../Types/FormsType";
import { dynamicImage, Image } from "../../../../../../../Utils";
import CreditCardForm from "./CreditCardForm";

const CreditCardOption: React.FC<PaymentFormProps> = ({ payMethod, updateFormData }) => {
  return (
    <Col xs="12">
      <div className="card-wrapper border rounded-3 pay-info light-card">
        <div>
          <div>
            <FormGroup check className="radio radio-primary">
              <Input id="shipping-choose6" type="radio" name="paymentMethodName" value="creditCard" checked={payMethod === "creditCard"} onChange={updateFormData} />
              <Label className="mb-0 f-w-500" htmlFor="shipping-choose6" check>{"Credit Card"}</Label>
            </FormGroup>
            <p>{"Transferring money securely through your bank account. Mastercard, Visa, Discover, and Stripe are all accepted"}</p>
          </div>
          <div>
            <Image src={dynamicImage(`forms/credit-card.png`)} alt="card" />
          </div>
        </div>
        <CreditCardForm />
      </div>
    </Col>
  );
};
export default CreditCardOption;
