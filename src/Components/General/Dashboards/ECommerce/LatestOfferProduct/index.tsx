import { useState } from "react";
import Slider from "react-slick";
import { Card, CardBody, Col, Row } from "reactstrap";
import { LatestOfferProductTitle } from "../../../../../Constants";
import { LatestOfferProductData } from "../../../../../Data/General/Dashboard/ECommerce";
import { dynamicImage, Image } from "../../../../../Utils";
import ProductDetails from "./ProductDetails";
import { CustomerGrowthType } from "../../../../../Types/GenerType";
import DashboardHeader from "../../Common/DashboardHeader";

const LatestOfferProduct:React.FC<CustomerGrowthType> = ({colClass}) => {
  const [nav1, setNav1] = useState<Slider | null>();
  const [nav2, setNav2] = useState<Slider | null>();
  return (
    <Col className={`box-col-12 ${colClass}`}>
      <Card>
        <DashboardHeader title={LatestOfferProductTitle} headerClass="card-no-border" dropdownClass="setting-menu" dropdownToggleClass="dropdown-toggle" />
        <CardBody className="product-page-main pt-0">
          <Row>
            <Col lg="6"> 
              <Slider className="product-slider product-slides"   arrows={false} asNavFor={nav2!} ref={(slider1) => setNav1(slider1)}>
                {LatestOfferProductData ? LatestOfferProductData.map((item, index) => <Image src={dynamicImage(`dashboard-2/product/${item}.png`)} alt="" className="rounded-4 border-0" key={index} />) : "No product Found"}
              </Slider>
              <Slider className="product-data me-2" arrows={false} asNavFor={nav1!} ref={(slider2) => setNav2(slider2)} slidesToShow={4} swipeToSlide={true} focusOnSelect={true}>
                {LatestOfferProductData && LatestOfferProductData.map((item, index) => <Image src={dynamicImage(`dashboard-2/product/${item}.png`)} alt="img" className="img-fluid rounded-4 " key={index} />)}
              </Slider>
            </Col> 
            <Col lg="6">
              <ProductDetails />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LatestOfferProduct;
