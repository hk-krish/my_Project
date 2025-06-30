import { Radar } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";
import { RadarGraphTitle } from "../../../Constants";
import { RadarGraphData, RadarOptions } from "../../../Data/Charts/ChartJsChart";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const RadarGraph = () => {
  return (
    <Col xl="6" md="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={RadarGraphTitle} />
        <CardBody className="chart-block">
          <Radar data={RadarGraphData} options={RadarOptions} width={724} height={362} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default RadarGraph;
