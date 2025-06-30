import { Card, CardBody, Col, Progress } from "reactstrap";
import { SummaryTitle } from "../../../../Constants";
import { SummaryProgressData } from "../../../../Data/General/Dashboard/ECommerce";
import DashboardHeader from "../Common/DashboardHeader";

const Summary = () => (
  <Col xl="6" className="proorder-xl-2">
    <Card>
      <DashboardHeader title={SummaryTitle} dropdownClass="setting-menu" dropdownToggleClass="dropdown-toggle" />
      <CardBody className="pt-0 summary-card">
        <span className="f-w-700 f-14">Jan 1, 2024 - Jun 30, 2022</span>
        <div className="summary-progressbar">
          <ul>
            {SummaryProgressData.map((data, idx) => (
              <li key={idx}>
                <div>
                  <h4>{data.value}</h4>
                  <span>{data.label}</span>
                </div>
                <Progress value={data.progress} color={data.color} className={`sm-progress-bar progress-border-${data.color}`} />
              </li>
            ))}
          </ul>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default Summary;
