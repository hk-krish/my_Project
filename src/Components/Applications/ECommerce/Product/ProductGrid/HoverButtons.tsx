import { Link } from "react-router-dom";
import { Href } from "../../../../../Constants";
import { useAppDispatch } from "../../../../../ReduxToolkit/Hooks";
import { addToCartData } from "../../../../../ReduxToolkit/Reducers/ECommerce/CartSlice";
import { HoverButtonsProp, ProductItemInterface } from "../../../../../Types/EcommerceType";
import { routes } from "../../../../../Routers/routes";

export const HoverButtons:React.FC<HoverButtonsProp> = ({ item, setDataId, setOpenModal }) => {
  const dispatch = useAppDispatch();
  const AddToCarts = (item: ProductItemInterface, quantity: number) => dispatch(addToCartData({ item, quantity }));
  const onClickHandle = (i: ProductItemInterface) => {
    setOpenModal(true);
    setDataId(i.id);
  };

  return (
    <div className="product-hover">
      <ul>
        <li>
          <Link to={routes.ECommerce.Cart} color="transparent" onClick={() => AddToCarts(item, 1)}>
            <i className="icon-shopping-cart"></i>
          </Link>
        </li>
        <li>
          <Link to={Href} color="transparent" onClick={() => onClickHandle(item)}>
            <i className="icon-eye"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};
