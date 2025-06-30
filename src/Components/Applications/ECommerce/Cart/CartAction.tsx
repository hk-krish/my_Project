import { Link } from 'react-router-dom';
import { Button, Input, InputGroup } from 'reactstrap';
import { Apply, CheckOut, ContinueShopping, Symbol, TotalPrice } from "../../../../Constants";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { getallCardTotal } from '../../../../Utils/EcommerceService';
import { Fragment } from 'react/jsx-runtime';
import { routes } from '../../../../Routers/routes';

const CartAction = () => {
  const { cart } = useAppSelector((state) => state.cartData);
  
  return (
    <Fragment>
      <tr>
        <td colSpan={4}>
          <InputGroup>
            <Input className="me-2" type="text" placeholder="Enter coupan code"/>
            <Button color='primary' className="text-white">{Apply}</Button>
          </InputGroup>
        </td>
        <td className="total-amount">
          <h6 className= "m-0 text-end" ><span className="f-w-600">{TotalPrice} :</span></h6>
        </td>
        <td><span>{Symbol}{getallCardTotal(cart)}</span></td>
      </tr>
      <tr>
        <td className="text-end" colSpan={5}><Link to={routes.ECommerce.Product} className="btn btn-secondary cart-btn-transform">{ContinueShopping}</Link></td>
        <td><Link className="btn btn-success cart-btn-transform" to={routes.ECommerce.Checkout}>{CheckOut}</Link></td>
      </tr>
    </Fragment>
  );
};

export default CartAction;
