import Chart from "react-google-charts";
import { Card, CardBody, Col } from "reactstrap";
import { GanttChartTitle } from "../../../Constants";
import { GanttChartData, GanttChartOptions } from "../../../Data/Charts/GoogleChart";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const GanttChart = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={GanttChartTitle}/>
        <CardBody className="chart-block">
          <div className="chart-overflow" id="gantt_chart">
            <Chart chartType={"Gantt"} width="100%" height={300} loader={<div>{"Loading Chart"}</div>} data={GanttChartData} options={GanttChartOptions} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default GanttChart;
