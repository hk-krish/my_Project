import { XCircle } from "react-feather";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { Row, Table } from "reactstrap";
import { Href, Symbol } from "../../../../Constants";
import { CartTableHeader } from "../../../../Data/Applications/ECommerce";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { removeCartData } from "../../../../ReduxToolkit/Reducers/ECommerce/CartSlice";
import { dynamicImage, Image } from "../../../../Utils";
import CartAction from "./CartAction";
import { CartQuantityButton } from "./CartQuantityButton";
import EmptyCart from "./EmptyCart";

export const CartData = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cartData);

  return (
    <Fragment>
      {cart && cart.length > 0 ? (
        <Row>
          <div className="order-history custom-scrollbar table-responsive wishlist">
            <Table className="table-bordered">
              <thead>
                <tr>
                  {CartTableHeader.map((items, i) => (<th key={i}>{items}</th>))}
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td><Image className="img-fluid img-40" src={dynamicImage(`${item.image}`)} /></td>
                    <td><div className="product-name"><a href={Href}>{item.name}</a></div></td>
                    <td>{Symbol}{item.price}</td>
                    <CartQuantityButton item={item} />
                    <td><Link to={Href} onClick={() => dispatch(removeCartData(item.id))}><XCircle /></Link></td>
                    <td>{Symbol}{item.price * item.total}</td>
                  </tr>
                ))}
                <CartAction/>
              </tbody>
            </Table>
          </div>
        </Row>
      ) : (
        <EmptyCart />
      )}
    </Fragment>
  );
};
