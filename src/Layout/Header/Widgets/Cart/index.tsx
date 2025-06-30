import SvgIcon from "../../../../Components/CoreComponents/SvgIcon";
import { CartTitle } from "../../../../Constants";
import CartList from "./CartList";

const Cart = () => {
  return (
    <li className="cart-nav onhover-dropdown">
      <div className="cart-box">
        <SvgIcon iconId="Buy" />
      </div>
      <div className="cart-dropdown onhover-show-div">
        <h6 className="f-18 mb-0 dropdown-title">{CartTitle}</h6>
        <CartList />
      </div>
    </li>
  );
};
export default Cart;
