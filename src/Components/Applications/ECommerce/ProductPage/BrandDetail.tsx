import { Card, CardBody, Col } from "reactstrap";
import { Brand } from "../../../../Constants";
import { BrandsData, ProductBrandData } from "../../../../Data/Applications/ECommerce";

const BrandDetail = () => {
  return (
    <Col xxl="3" md="6" className="box-col-12">
      <Card>
        <CardBody>
          <div className="filter-block">
            <h3>{Brand}</h3>
            <ul>
              {BrandsData.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div className="collection-filter-block">
            <ul className="pro-services">
              {ProductBrandData.map((item, index) => (
                <li key={index}>
                  <div className="d-flex">
                    {item.icon}
                    <div className="flex-grow-1">
                      <h5>{item.text}</h5>
                      <p>{item.span}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BrandDetail;
