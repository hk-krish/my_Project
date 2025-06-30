import { Link } from "react-router-dom";
import { Button, Input, Label } from "reactstrap";
import { ProductColorVariants } from "../../../../../Data/General/Dashboard/ECommerce";
import { routes } from "../../../../../Routers/routes";
import CountdownData from "../../../../CoreComponents/CountdownData";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <Link to={routes.ECommerce.ProductPage}>
        <h4>Apple iphone 13 Mini (512 GB) Green </h4>
      </Link>
      <div className="product-Price">
        <h2 className="txt-primary">$89,999 </h2>
        <div><del>$1,19,999</del></div> 
      </div>
      <div className="d-flex gap-2 variants-title">
        <span>Color :</span>
        <span>Green</span>
      </div>
      <div className="color-variants">
        {ProductColorVariants.map((option) => (
          <div key={option.id} className={`form-check radio ${option.colorClass}`}>
            <Input id={option.id} type="radio" name="radio1" defaultValue={option.value} defaultChecked={option.checked} />
            <Label htmlFor={option.id} />
          </div>
        ))}
      </div>
      <div className="d-flex gap-2 variants-title">
        <span>Size :</span>
        <span>512GB </span>
      </div>
      <div className="variants-button">  
        <Button outline color="primary" className="me-2" size="md">512GB</Button>
        <Button outline color="lights" size="md" className="txt-dark">256GB</Button>
      </div>
      <div className="discount-box">
        <h6>Special Discount</h6>
      </div>
      <h3 className="text-truncate">Deal of the Day From</h3>
      <div className="countdown">
        <CountdownData />
      </div>
    </div>
  );
};

export default ProductDetails;
