import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { SalesStatsTitle } from "../../../../Constants";
import { SalesStatsOption } from "../../../../Data/General/Dashboard/Default";
import { CustomerGrowthType } from "../../../../Types/GenerType";
import DashboardHeader from "../Common/DashboardHeader";

const SalesStats:React.FC<CustomerGrowthType> = ({colClass}) => {
  return (
    <Col className={colClass}>
      <Card>
        <DashboardHeader title={SalesStatsTitle} headerClass="custom-border-bottom" dropdownToggleClass="dropdown-toggle" dropdownClass="setting-menu" />
        <CardBody className="pt-0">
          <div id="salesStatsRadialChart">
            <ReactApexChart options={SalesStatsOption} series={SalesStatsOption.series} type="radialBar" height={360} />
          </div> 
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesStats;
