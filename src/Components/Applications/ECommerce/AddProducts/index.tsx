import { AddProduct, ECommerce, ProductForm } from "../../../../Constants";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import ProductLeftSidebar from "./ProductLeftSidebar";
import ProductTabContent from "./ProductTabContent/ProductTabContent";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const AddProductContainer = () => {

  return (
    <>
      <Breadcrumbs mainTitle={AddProduct} parent={ECommerce} />
      <Container fluid>
        <Row>
          <Col xs="12">
            <Card className="custom-product-form">
              <CommonCardHeader title={ProductForm} headClass="pb-0"/>
              <CardBody> 
                <Row className="g-xl-5 g-3 gy-4"> 
                  <ProductLeftSidebar />
                  <ProductTabContent /> 
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddProductContainer;