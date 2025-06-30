import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { SalesDetailsTitle } from "../../../../Constants";
import { ChartDash } from "../../../../Data/General/Dashboard/ECommerce";
import { DashboardDropdown } from "../Common/DashboardDropdown";

const SalesDetails = () => {
  return (
    <Col xxl="6" className="proorder-xl-9 box-col-12">
      <Card>
        <div className="card-header">
          <div className="header-top">
            <h4>{SalesDetailsTitle}</h4>
            <div className="sales-details">
              <div className="user-activity">
                <ul>
                  <li>
                    <div className="applications-menu">
                      <div className="rounded-btn-primary" />
                      <h3>Running Orders</h3>
                    </div>
                  </li>
                  <li>
                    <div className="applications-menu">
                      <div className="rounded-btn-secondary"> </div>
                      <h3>Complete Delivery</h3>
                    </div>
                  </li>
                </ul>
              </div>
              <DashboardDropdown dropdownToggleClass="dropdown-toggle" dropdownClass="setting-menu" />
            </div>
          </div>
        </div>
        <CardBody>
          <div className="chart-dash-2-line" id="chart-dash-2-line">
            <ReactApexChart options={ChartDash} series={ChartDash.series} type="line" height={325} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesDetails;
