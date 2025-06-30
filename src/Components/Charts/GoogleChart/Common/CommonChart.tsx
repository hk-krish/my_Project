import Chart from "react-google-charts";
import { Card, CardBody, Col } from "reactstrap";
import { CommonChartType } from "../../../../Types/GenerType";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";

const CommonChart: React.FC<CommonChartType> = ({ title, bodyClass, colClass, data, divClass }) => {
  return (
    <Col sm="12" className={colClass ? colClass : "col-xl-6 box-col-6"}>
      <Card className="overflow-hidden">
        <CommonCardHeader title={title}/>
        <CardBody className={`chart-block ${bodyClass ? bodyClass : ""}`}>
          <div className={divClass} id="column-chart1">
            <Chart width={data?.width} height={data?.height} chartType={data?.chartType} loader={<div>{"Loading Chart"}</div>} data={data?.data} options={data?.option} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CommonChart;
