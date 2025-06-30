import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row } from "reactstrap";
import { LatestSalesChart } from "../../../../Data/General/Dashboard/ECommerce";
import { routes } from "../../../../Routers/routes";
import SvgIcon from "../../../CoreComponents/SvgIcon";
import { TotalSaleTitle } from "../../../../Constants";

const TotalSale = () => {
  return (
    <Col xl="6" className="proorder-xl-1">
      <Card>
        <CardBody className="selling-card">
          <Row>
            <Col md="4">
              <div className="sale-card">
                <div className="sale-date">
                  <h4>{TotalSaleTitle}</h4>
                  <Link to={routes.ECommerce.Orders}>
                    <span className="txt-primary f-w-700">(See all sales)</span>
                  </Link>
                </div>
                <span className="f-w-700 f-14 pb-4">Jan 1,2024 - Jun 30,2022</span>
                <div className="sale-data">
                  <ul>
                    <li>
                      <h4>$654.85K</h4>
                      <div className="sale-value">
                        <SvgIcon iconId="drop-menu" />
                        <div className="sales-value">
                          <span className="txt-danger">95%</span>
                          <span>6 month before </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <div className="col-md-8">
              <div className="latest-chart" id="latestSales-chart">
                <ReactApexChart options={LatestSalesChart} series={LatestSalesChart.series} type="line" height={142} />
              </div>
            </div>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalSale;
