import { Card, Col } from "reactstrap";
import { WeeklyUserActivityTitle } from "../../../../Constants";
import ReactApexChart from "react-apexcharts";
import { UserActivity } from "../../../../Data/General/Dashboard/ECommerce";
import { CustomerGrowthType } from "../../../../Types/GenerType";
import DashboardHeader from "../Common/DashboardHeader";

const WeeklyUserActivity:React.FC<CustomerGrowthType> = ({colClass}) => {
  return (
    <Col xxl="4" className={`proorder-xl-6 ${colClass}`}>
      <Card>
        <DashboardHeader title={WeeklyUserActivityTitle} dropdownClass="setting-menu" dropdownToggleClass="dropdown-toggle" />
        <div className="card-body pt-0">
          <div className="user-activity" id="UserActivity">
            <ReactApexChart options={UserActivity} series={UserActivity.series} type="radialBar" height={310}/>
          </div> 
          <div className="user-activity">
            <ul>
              <li> 
                <div className="applications-menu">
                  <div className="rounded-btn-primary" />
                  <h3>Online Applications</h3> 
                </div>
                <h4>55%</h4>
              </li>
              <li>
                <div className="applications-menu">
                  <div className="rounded-btn-secondary" />
                  <h3>Offline Applications</h3>
                </div>
                <h4>45%</h4>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default WeeklyUserActivity;
