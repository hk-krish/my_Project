import { Fragment } from "react";
import { Col, TabContent, TabPane } from "reactstrap";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import CommonButton from "../CommonButton/CommonButton";
import ProductOne from "./ProductOne";
import ProductTwo from "./ProductTwo";
import ProductThree from "./ProductThree";
import ProductFour from "./ProductFour";
import ProductFive from "./ProductFive";

const ProductTabContent = () => {
  const { navId } = useAppSelector((state) => state.addProduct);
  return (
    <Fragment>
      <Col xxl="9" xl="8" className="box-col-8 position-relative">
        <TabContent activeTab={navId}>
          <TabPane tabId={1}>
            <ProductOne />
          </TabPane>
          <TabPane tabId={2}>
            <ProductTwo />
          </TabPane>
          <TabPane tabId={3}>
            <ProductThree />
          </TabPane>
          <TabPane tabId={4}>
            <ProductFour />
          </TabPane>
          <TabPane tabId={5}>
            <ProductFive />
          </TabPane>
        </TabContent>
      </Col>
      <CommonButton />
    </Fragment>
  );
};

export default ProductTabContent;
