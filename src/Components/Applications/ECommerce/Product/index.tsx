import { Fragment, useEffect } from "react";
import { Container } from "reactstrap";
import { ECommerce, Product } from "../../../../Constants";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ECommerce/ProductSlice";
import ProductFeatures from "./ProductFeatures/ProductFeatures";
import ProductGrid from "./ProductGrid/ProductGrid";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const ProductContainer = () => {
  const sideBarOn = useAppSelector((state) => state.filterData.sideBarOn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Product} parent={ECommerce} />
      <Container fluid className={`product-wrapper ${sideBarOn ? "sidebaron" : ""}`}>
        <div className="product-grid">
          <ProductFeatures />
          <ProductGrid />
        </div>
      </Container>
    </Fragment>
  );
};

export default ProductContainer;
