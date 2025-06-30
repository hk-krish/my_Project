import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { CommonChartType } from "../../../../Types/GenerType";

const CommonChart: React.FC<CommonChartType> = ({ title, data, colClass }) => {
  return (
    <Col sm="12" className={colClass ? colClass : "col-xl-6 box-col-6"}>
      <Card>
        <CommonCardHeader title={title}/>
        <CardBody>
          <ReactApexChart options={data} series={data?.series} type={data?.chart?.type} height={350} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default CommonChart;
