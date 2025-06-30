import { Link } from "react-router-dom";
import { Card, CardBody, Col, Table } from "reactstrap";
import { LastOrdersTitle } from "../../../../Constants";
import { LastOrdersData } from "../../../../Data/General/Dashboard/Default";
import { routes } from "../../../../Routers/routes";
import { dynamicImage, Image } from "../../../../Utils";
import { DashboardDropdown } from "../Common/DashboardDropdown";
import DashboardHeader from "../Common/DashboardHeader";

const LastOrders = () => (
  <Col xl="6" md="12" className="box-col-12 proorder-md-4">
    <Card>
      <DashboardHeader title={LastOrdersTitle} dropdownClass="setting-menu" dropdownToggleClass="dropdown-toggle" />
      <CardBody>
        <div className="table-responsive custom-scrollbar">
          <Table className="last-orders-table">
            <thead>
              <tr><th>Name</th><th>Order No.</th><th>Amount</th><th>Payment Type</th><th>Date</th><th>Action</th></tr>
            </thead>
            <tbody>
              {LastOrdersData.map((order, index) => (
                <tr key={index}>
                  <td>
                    <div className="user-data">
                      <Image src={dynamicImage(`dashboard/avtar/${order.avatar}`)} alt="avatar" />
                      <div>
                        <Link to={routes.Users.Profile}><h4>{order.name}</h4></Link><span>{order.country}</span>
                      </div>
                    </div>
                  </td>
                  <td>{order.orderNo}</td>
                  <td>{order.amount}</td>
                  <td>{order.payment}</td>
                  <td>{order.date}</td>
                  <td>
                    <DashboardDropdown dropdownToggleClass="dropdown-toggle" dropdownIcon  />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default LastOrders;
