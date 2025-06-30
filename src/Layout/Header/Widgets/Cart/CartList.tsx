import { useState } from "react";
import { X } from "react-feather";
import { Link } from "react-router-dom";
import { Checkout, EmptyCart, Href, OrderTotal, ViewCart } from "../../../../Constants";
import { carts } from "../../../../Data/Layout/Header";
import { dynamicImage, Image } from "../../../../Utils";
import { routes } from "../../../../Routers/routes";

const CartList = () => {
  const [items, setItems] = useState(carts);
  const handleDelete = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  return (
    <ul>
      {items.length > 0 ? (
        <>
          {items.map((item) => (
            <li key={item.id}>
              <div className="d-flex">
                <Image className="img-fluid b-r-5 img-50" src={dynamicImage(`ecommerce/${item.image}`)} alt="cosmetic" />
                <div className="flex-grow-1">
                  <span>{item.name}</span>
                  <h6 className="font-primary">{item.quantity}{" X $ "}{item.price}</h6>
                </div>
                <div className="close-circle">
                  <a href={Href} className="bg-primary" onClick={() => handleDelete(item.id)}><X /></a>
                </div>
              </div>
            </li>
          ))}
          <li className="total">
            <h6 className="mb-0">
              {OrderTotal} <span className="f-right">{"$" + items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
            </h6>
          </li>
          <li className="d-flex gap-2">
            <Link className="view-cart btn btn-outline-primary w-100" to={routes.ECommerce.Cart}>{ViewCart}</Link>
            <Link className="view-checkout btn btn-primary w-100" to={routes.ECommerce.Checkout}>{Checkout}</Link>
          </li>
        </>
      ) : (
        <li className={`cart-empty ${items.length === 0 ? "show" : ""}`}>
          <div className="cart-image">
            <Image className="img-fluid" src={dynamicImage(`other-images/order-trash.gif`)} alt="empty" />
          </div>
          <h5>{EmptyCart}</h5>
        </li>
      )}
    </ul>
  );
};
export default CartList;
