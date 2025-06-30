import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { Symbol } from "../../../../../Constants";
import { routes } from "../../../../../Routers/routes";
import { ProductDetailsProp } from "../../../../../Types/EcommerceType";

const ProductDetails: React.FC<ProductDetailsProp> = ({ item }) => {

  return (
    <div className="product-details">
      <Rating fillColor="#ffa800" initialValue={Math.random() * 5} size={17} />
      <Link to={routes.ECommerce.ProductPage}>
        <h4>{item.name}</h4>
      </Link>
      <p>{item.note}</p>
      <div className="product-price">
        {Symbol}
        {item.price}
        <del className="f-w-700">
          {Symbol}
          {item.discountPrice}
        </del>
      </div>
    </div>
  );
};
export default ProductDetails;
