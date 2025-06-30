import { Fragment } from "react/jsx-runtime";
import { Subtotal } from "../../../../../Constants";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { getCartTotal, getallCardTotal } from "../../../../../Utils/EcommerceService";

const InvoiceOrderBody = () => {
  const { cart, tax } = useAppSelector((state) => state.cartData);

  return (
    <Fragment>
      {cart?.map((data, i) => (
        <tr key={i}>
          <td>
            <span className="circle"  />
            <span>{data.name}</span>
          </td>
          <td >
            <span>${data.price}</span>
          </td>
          <td >
            <span>{data.total}</span>
          </td>
          <td >
            <span>$ {getCartTotal(data)}</span>
          </td>
        </tr>
      ))}
      <tr className="subtotal-row">
        <td> </td><td> </td>
        <td ><span>{Subtotal}</span></td>
        <td >
          <span>{getallCardTotal(cart)}</span>
        </td>
      </tr> 
      <tr className="tax-row">
        <td> </td><td> </td>
        <td ><span>Tax({tax}%)</span></td>
        <td >
          <span>$ {(getallCardTotal(cart) * tax) / 100}</span>
        </td>
      </tr>
      <tr className="total-row">
        <td> </td><td> </td>
        <td ><span >Amount Due (USD)</span></td>
        <td >
          <span >$ {getallCardTotal(cart) + (getallCardTotal(cart) * tax) / 100}</span>
        </td>
      </tr>
    </Fragment>
  );
};

export default InvoiceOrderBody;
