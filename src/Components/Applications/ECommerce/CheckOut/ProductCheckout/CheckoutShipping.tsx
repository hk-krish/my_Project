import { Input, Label } from "reactstrap";
import { Option1, Option2, Shipping } from "../../../../../Constants";

const CheckoutShipping = () => {
  return (
    <li className="shipping-class">
      {Shipping}
      <div className="shopping-checkout-option">
        <Label className="d-block" for="chk-ani">
          <Input className="checkbox_animated" id="chk-ani" type="checkbox" defaultChecked />
          {Option1}
        </Label>
        <Label className="d-block" for="chk-ani1">
          <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />
          {Option2}
        </Label>
      </div>
    </li>
  );
};

export default CheckoutShipping;
