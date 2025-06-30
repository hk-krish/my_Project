import { Line } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";
import { LineChartTitle } from "../../../Constants";
import { LineChartData, LineChartOption } from "../../../Data/Charts/ChartJsChart";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const LineChart = () => {
  return (
    <Col xl="6" md="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={LineChartTitle} />
        <CardBody className="chart-block">
          <Line data={LineChartData} options={LineChartOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default LineChart;
