import { Card, CardBody, Col, Table } from "reactstrap";
import { SellingProductTitle } from "../../../../Constants";
import { SellingProductData } from "../../../../Data/General/Dashboard/ECommerce";
import { Link } from "react-router-dom";
import { routes } from "../../../../Routers/routes";
import { dynamicImage, Image } from "../../../../Utils";
import DashboardHeader from "../Common/DashboardHeader";

const SellingProduct = () => {
  return (
    <Col xxl="4" md="6" className="proorder-xl-7 box-col-12">
      <Card>
        <DashboardHeader title={SellingProductTitle} dropdownClass="setting-menu" dropdownToggleClass="dropdown-toggle" />
        <CardBody>
          <div className="table-responsive custom-scrollbar">
            <Table className="monthly-selling">
              <thead>
                <tr><th>Product Name</th><th>Orders </th><th>Status </th><th className="text-end">Price</th></tr>
              </thead>
              <tbody>
                {SellingProductData.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <div className="user-data">
                        <div className="product-image">
                          <Image src={dynamicImage(`dashboard-2/product/${product.image}`)} alt={product.name} />
                        </div>
                        <div>
                          <Link to={routes.ECommerce.Product}><h4>{product.name}</h4></Link>
                          <span>{product.id}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="user-time">
                        <Link to={routes.ECommerce.Product}><h4>{product.quantity}</h4></Link>
                      </div>
                    </td>
                    <td className={product.stockClass}>{product.stock}</td>
                    <td>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SellingProduct;
