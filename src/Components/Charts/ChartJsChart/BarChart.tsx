import { Bar } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { BarChartTitle } from "../../../Constants";
import { BarChartData, BarChartOptions } from "../../../Data/Charts/ChartJsChart";

const BarChart = () => {
  return (
    <Col xl="6" md="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={BarChartTitle} />
        <CardBody className="chart-block">
          <Bar data={BarChartData} options={BarChartOptions} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default BarChart;
