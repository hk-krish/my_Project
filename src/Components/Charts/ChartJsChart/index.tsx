import { Container, Row } from "reactstrap";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
import LineGraph from "./LineGraph";
import PolarChart from "./PolarChart";
import RadarGraph from "./RadarGraph";
import { ChartJSChart, Charts } from "../../../Constants";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const ChartJsChartContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ChartJSChart} parent={Charts} />
      <Container fluid>
        <Row>
          <BarChart />
          <LineGraph />
          <RadarGraph />
          <LineChart />
          <DoughnutChart />
          <PolarChart />
        </Row>
      </Container>
    </Fragment>
  );
};
export default ChartJsChartContainer;
