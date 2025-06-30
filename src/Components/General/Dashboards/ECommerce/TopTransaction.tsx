import { Link } from "react-router-dom";
import { Card, CardBody, Col, Table } from "reactstrap";
import { TopTransactionTitle } from "../../../../Constants";
import { TopTransactionData } from "../../../../Data/General/Dashboard/ECommerce";
import { routes } from "../../../../Routers/routes";
import { dynamicImage, Image } from "../../../../Utils";
import DashboardHeader from "../Common/DashboardHeader";

const TopTransaction = () => {
  return (
    <Col xxl="4" lg="6" className="proorder-xl-5 box-col-6">
      <Card>
        <DashboardHeader title={TopTransactionTitle} dropdownClass="setting-menu" dropdownToggleClass="dropdown-toggle" />
        <CardBody>
          <div className="table-responsive custom-scrollbar">
            <Table className="last-orders-table">
              <thead>
                <tr><th>Product Name</th><th>Date</th><th>Payment</th><th>Purchase</th></tr>
              </thead>
              <tbody>
                {TopTransactionData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="user-data">
                        <div><Image src={dynamicImage(`product/${item.img}`)} alt="product" /></div>
                        <div>
                          <Link to={routes.ECommerce.Product}><h4>{item.name}</h4></Link>
                          <span>{item.id}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="user-time">
                        <Link to={routes.ECommerce.Product}><h4>{item.date}</h4></Link>
                      </div>
                    </td>
                    <td>{item.method}</td>
                    <td>{item.price}</td>
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

export default TopTransaction;
