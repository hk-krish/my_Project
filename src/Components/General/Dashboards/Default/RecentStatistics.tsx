import { Card, CardBody, Col } from "reactstrap";
import { RecentStatisticsTitle } from "../../../../Constants";
import SvgIcon from "../../../CoreComponents/SvgIcon";
import ReactApexChart from "react-apexcharts";
import { OptionsOverView } from "../../../../Data/General/Dashboard/Default";
import { CustomerGrowthType } from "../../../../Types/GenerType";
import DashboardHeader from "../Common/DashboardHeader";

const RecentStatistics:React.FC<CustomerGrowthType> = ({colClass}) => {
  return (
    <Col className={colClass}>
      <Card className="custom-statistics">
        <DashboardHeader title={RecentStatisticsTitle} dropdownClass="setting-menu" dropdownToggleClass="dropdown-toggle" />
        <CardBody className="pb-0">
          <div className="recent-statistics">
            <ul>
              <li>
                <div className="arrow-up">
                  <SvgIcon iconId="Arrow-Up" />
                </div>
                <span>$5.850</span>
              </li>
              <li>
                <div className="arrow-down">
                  <SvgIcon iconId="Arrow-Down" />
                </div>
                <span>$1.750</span>
              </li>
            </ul>
          </div>
          <div id="orderoverview">
            <ReactApexChart options={OptionsOverView} series={OptionsOverView.series} type="line" height={310} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentStatistics;
