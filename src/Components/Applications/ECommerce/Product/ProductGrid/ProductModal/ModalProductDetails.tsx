import { Fragment } from "react/jsx-runtime";
import { Button } from "reactstrap";
import { ProductDetails, Symbol } from "../../../../../../Constants";
import { ModalProductDetailsProp } from "../../../../../../Types/EcommerceType";

export const ModalProductDetails: React.FC<ModalProductDetailsProp> = ({ singleProduct }) => {
  const ProductSizeArray: string[] = ["M", "L", "Xl"];

  return (
    <Fragment>
      <h3>{singleProduct.category}</h3>
      <div className="product-price fs-4 mb-2">
        {Symbol}
        {singleProduct.price}
        <del className="f-w-700 fs-5 ms-1">
          {Symbol}
          {singleProduct.discountPrice}
        </del>
      </div>
      <div className="product-view">
        <h3>{ProductDetails}</h3>
        <p className="mb-0">{singleProduct.discription}</p>
      </div>
      <div className="product-size mt-3 mb-3"> 
        <ul className="d-flex">
          {ProductSizeArray.map((items, i) => (
            <li key={i} className="me-2">
              <Button outline color="light"> 
                {items}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
