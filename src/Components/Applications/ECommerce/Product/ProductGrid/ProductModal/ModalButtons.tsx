import { Link } from "react-router-dom";
import { AddToCartButton, ViewDetails } from "../../../../../../Constants";
import { useAppDispatch } from "../../../../../../ReduxToolkit/Hooks";
import { addToCartData } from "../../../../../../ReduxToolkit/Reducers/ECommerce/CartSlice";
import { ModalButtonsProp, ProductItemInterface } from "../../../../../../Types/EcommerceType";
import { routes } from "../../../../../../Routers/routes";

export const ModalButtons: React.FC<ModalButtonsProp> = ({ singleProduct, quantity }) => {
  const dispatch = useAppDispatch();
  const AddToCarts = (item: ProductItemInterface) => dispatch(addToCartData({ item, quantity }));

  return (
    <div className="addcart-btn">
      <Link to={routes.ECommerce.Cart} className="btn btn-primary text-white me-2" onClick={() => AddToCarts(singleProduct)}>
        {AddToCartButton}
      </Link>
      <Link to={routes.ECommerce.ProductPage} className="btn btn-primary text-white">
        {ViewDetails}
      </Link>
    </div>
  );
};
