import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Progress } from "reactstrap";
import { SalesStatisticTitle } from "../../../../Constants";
import { GroupBarChart, SalesStatisticData } from "../../../../Data/General/Dashboard/Default";
import DashboardHeader from "../Common/DashboardHeader";

const SalesStatistic = () => (
  <Col xl="6" className="proorder-md-10 box-col-12">
    <Card>
      <DashboardHeader title={SalesStatisticTitle} headerClass="custom-border-bottom" dropdownClass="setting-menu" dropdownToggleClass="dropdown-toggle" />
      <CardBody>
        <div id="groupBarChart">
          <ReactApexChart options={GroupBarChart} series={GroupBarChart.series} type="bar" height={305} />
        </div>
        <div className="sales-data">
          <ul>
            {SalesStatisticData.map((data, index) => (
              <li key={index}>
                <div className="total-sales">
                  <div>
                    <h5>{data.amount}</h5>
                    <span>Total {index === 0 ? "Sales" : "Income"}</span>
                  </div>
                  <div className="total-reached">
                    <span>{data.goal}</span>
                    <span>{data.goalReached}</span>
                  </div>
                </div>
                <div className="progress-data">
                  <Progress value={data.progress} color={data.color} className={`sm-progress-bar progress-border-${data.color}`} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default SalesStatistic;
