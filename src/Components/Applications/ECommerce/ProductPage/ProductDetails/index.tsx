import { Card, CardBody, Col } from "reactstrap";
import { ProductTittle, Symbol } from "../../../../../Constants";
import { ProductColorData, ProductDetailData } from "../../../../../Data/Applications/ECommerce";
import { ProductDetailButton } from "./ProductDetailButton";
import { ProductRating } from "./ProductRating";
import { ProductSocial } from "./ProductSocial";
import { ProductTable } from "./ProductTable";

const ProductDetails = () => {
  return (
    <Col xxl="5" className="box-col-6 order-xxl-0 order-1">
      <Card>
        <CardBody>
          <div className="product-page-details">
            <h3>{ProductTittle}</h3>
          </div>
          <div className="product-price">
            {Symbol}26.00<del>{Symbol}350.00 </del>
          </div>
          <ul className="product-color">
            {ProductColorData.map((item, index) => <li className={`bg-${item}`} key={index}/>)}
          </ul>
          <hr />
          <p>{ProductDetailData}</p>
          <hr />
          <ProductTable />
          <ProductSocial />
          <ProductRating />
          <ProductDetailButton />
        </CardBody>
      </Card>
    </Col>
  );
};
export default ProductDetails;
