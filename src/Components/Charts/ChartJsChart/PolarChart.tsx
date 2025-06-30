import { PolarArea } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";
import { PolarChartTitle } from "../../../Constants";
import { PolarData, PolarOption } from "../../../Data/Charts/ChartJsChart";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const PolarChart = () => {
  return (
    <Col xl="6" md="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={PolarChartTitle} />
        <CardBody className="chart-block chart-vertical-center">
          <PolarArea data={PolarData} options={PolarOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default PolarChart;
