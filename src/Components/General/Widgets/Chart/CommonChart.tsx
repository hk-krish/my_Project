import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { CommonChartType } from "../../../../Types/GenerType";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";

const CommonChart: React.FC<CommonChartType> = ({ title, colClass, data, chartHeight }) => {
  return (
    <Col className={colClass}>
      <Card className="o-hidden">
        <CommonCardHeader title={title} />
        <CardBody>
          <div className="chart-container">
            <div>
              <ReactApexChart options={data} series={data?.series} type={data?.chart?.type} height={chartHeight} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CommonChart;
