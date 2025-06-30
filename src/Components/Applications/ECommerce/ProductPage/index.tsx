import { Fragment, useEffect } from "react";
import { Card, Container, Row } from "reactstrap";
import { ECommerce, ProductPage } from "../../../../Constants";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ECommerce/ProductSlice";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import BrandDetail from "./BrandDetail";
import ClothsDetails from "./ClothsDetails";
import ImageSlider from "./ImageSlider";
import ProductDetails from "./ProductDetails";

const ProductPageContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ProductPage} parent={ECommerce} />
      <Container fluid>
        <div>
          <Row className="product-page-main p-0">
            <ImageSlider />
            <ProductDetails />
            <BrandDetail />
            <Card> 
              <Row className="product-page-main">
                <ClothsDetails />
              </Row>
            </Card>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default ProductPageContainer;
