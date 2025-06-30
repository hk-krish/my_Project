import { Card, CardBody, Col, Input, Table } from "reactstrap";
import { RecentOrdersTitle } from "../../../../../Constants";
import OrdersTableBody from "./OrdersTableBody";
import DashboardHeader from "../../Common/DashboardHeader";

const RecentOrders = () => (
  <Col xl="7" className="proorder-xl-3 box-col-6">
    <Card>
      <DashboardHeader title={RecentOrdersTitle} dropdownClass="setting-menu" dropdownToggleClass="dropdown-toggle" />
      <CardBody>
        <div className="table-responsive custom-scrollbar">
          <Table className="last-orders-table">
            <thead>
              <tr>
                <th>
                  <div className="form-check">
                    <Input type="checkbox" />
                  </div>
                </th>
                <th>Product Name</th>
                <th>Date & Time</th>
                <th>Customer</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <OrdersTableBody />
          </Table>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default RecentOrders;
