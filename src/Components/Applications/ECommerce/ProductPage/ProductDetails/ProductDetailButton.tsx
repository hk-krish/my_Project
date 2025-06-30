import { Link } from "react-router-dom";
import { AddToCart, AddToWishList, BuyNow } from "../../../../../Constants";
import { routes } from "../../../../../Routers/routes";

export const ProductDetailButton = () => {
  return (
    <div className="m-t-15 btn-showcase">
      <Link className="btn btn-primary" to={routes.ECommerce.Cart}>
        <i className="fa fa-shopping-basket me-1"></i>
        {AddToCart}
      </Link>
      <Link className="btn btn-success" to={routes.ECommerce.Checkout}>
        <i className="fa fa-shopping-cart me-1"></i>
        {BuyNow}
      </Link>
      <Link className="btn btn-secondary" to={routes.ECommerce.Wishlist}>
        <i className="fa fa-heart me-1"></i>
        {AddToWishList}
      </Link>
    </div>
  );
};
