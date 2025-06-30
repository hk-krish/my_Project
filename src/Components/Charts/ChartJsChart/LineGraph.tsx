import { Line } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";
import { LineGraphTitle } from "../../../Constants";
import { LineGraphData, LineGraphOptions } from "../../../Data/Charts/ChartJsChart";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const LineGraph = () => {
  return (
    <Col xl="6" md="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={LineGraphTitle} />
        <CardBody className="chart-block">
          <Line data={LineGraphData} options={LineGraphOptions} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default LineGraph;
