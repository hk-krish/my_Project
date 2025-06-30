import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { ApexCharts, AreaSplineChartTitle, BarChartTitle, BasicAreaChartTitle, BubbleChartTitle, CandlestickChartTitle, Charts, ColumnChartTitle, DonutChartTitle, MixedChartTitle, PieChartTitle, RadarChartTitle, RadialBarChartTitle, StepLineChartTitle } from "../../../Constants";
import { AreaSplineChart, BarChart, BasicAreaCharts, BubbleChart, CandleStickChart, ColumnChart, DonutChart, LineWithAnnotationChart, MixedChart, PieChart, RadarCharts, RadialBarChart, StepLineChart } from "../../../Data/Charts/ApexChart";
import CommonChart from "./CommonChart";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const ApexChartContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ApexCharts} parent={Charts} />
      <Container fluid>
        <Row>
          <CommonChart title={BasicAreaChartTitle} data={BasicAreaCharts} />
          <CommonChart title={AreaSplineChartTitle} data={AreaSplineChart} />
          <CommonChart title={BarChartTitle} data={BarChart} />
          <CommonChart title={ColumnChartTitle} data={ColumnChart}/>
          <CommonChart title={BubbleChartTitle} data={BubbleChart} colClass="col-xl-6 box-col-6" />
          <CommonChart title={StepLineChartTitle} data={StepLineChart} colClass="col-xl-6 box-col-6" />
          <CommonChart title={ColumnChartTitle} data={LineWithAnnotationChart} colClass="col-xl-12 box-col-12" />
          <CommonChart title={PieChartTitle} data={PieChart} colClass="box-col-6 col-sm-12 col-xl-6"/>
          <CommonChart title={DonutChartTitle} data={DonutChart} colClass="box-col-6 col-sm-12 col-xl-6"/>
          <CommonChart title={MixedChartTitle} data={MixedChart} colClass="col-xl-12 box-col-12" />
          <CommonChart title={CandlestickChartTitle} data={CandleStickChart} colClass="col-xl-12 box-col-12" />
          <CommonChart title={RadarChartTitle} data={RadarCharts} />
          <CommonChart title={RadialBarChartTitle} data={RadialBarChart} />
        </Row>
      </Container>
    </Fragment>
  );
};
export default ApexChartContainer;
