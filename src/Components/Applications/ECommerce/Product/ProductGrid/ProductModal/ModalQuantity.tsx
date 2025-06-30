import { ChangeEvent, Fragment } from "react";
import { Button, Input, InputGroup } from "reactstrap";
import { Quantity } from "../../../../../../Constants";
import { ModalQuantityProp } from "../../../../../../Types/EcommerceType";

export const ModalQuantity: React.FC<ModalQuantityProp> = ({ quantity, setQuantity }) => {
  const minusQty = () => quantity > 1 && setQuantity(quantity - 1);
  const plusQty = () => quantity >= 1 && setQuantity(quantity + 1);
  const changeQty = (e: ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(e.target.value));

  return (
    <Fragment>
      <h5>{Quantity}</h5>
      <fieldset className="border-0 m-0 p-0 w-50">
        <InputGroup className="bootstrap-touchspin">
          <Button color="primary" className="btn-square bootstrap-touchspin-down w-25 p-2" onClick={minusQty}>
            <i className="fa fa-minus text-white"></i>
          </Button>
          <Input className="touchspin text-center" type="text" name="quantity" value={quantity} onChange={(e) => changeQty(e)} />
          <Button color="primary" className="btn-square bootstrap-touchspin-up rounded-0 w-25 p-2" onClick={plusQty}>
            <i className="fa fa-plus text-white"></i>
          </Button>
        </InputGroup>
        <br />
      </fieldset>
    </Fragment>
  );
};
