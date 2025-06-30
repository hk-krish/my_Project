import { Doughnut } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";
import { DoughnutChartTitle } from "../../../Constants";
import { DoughnutData, DoughnutOption } from "../../../Data/Charts/ChartJsChart";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const DoughnutChart = () => {
  return (
    <Col xl="6" md="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={DoughnutChartTitle} />
        <CardBody className="chart-block chart-vertical-center">
          <Doughnut data={DoughnutData} options={DoughnutOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default DoughnutChart;
