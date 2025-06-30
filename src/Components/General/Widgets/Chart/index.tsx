import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { ChartTitle, CryptoAnnotationsTitle, CryptocurrencyPricesTitle, FinanceTitle, LiveProductsTitle, MonthlyHistoryTitle, MonthlySalesTitle, OrderStatusTitle, ProjectCreatedTitle, SalesOverviewTitle, StockMarketTitle, TurnOverTitle, UsersTitle, WidgetTitle } from "../../../../Constants";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import CommonChart from "./CommonChart";
import TotalSale from "./TotalSale";
import { CryptoAnnotationsChart, CryptocurrencyPricesChart, FinanceChart, LiveProductsChart, MonthlyHistoryChart, MonthlySalesChart, OrderStatusChart, RevenueGrowth, SalesOverviewChart, StockMarketChart, TurnOverChart, UsesChart } from "../../../../Data/General/Widgets/Chart";

const ChartContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ChartTitle} parent={WidgetTitle} />
      <Container fluid>
        <Row>
          <TotalSale />
        </Row>
        <Row>
          <CommonChart title={ProjectCreatedTitle} data={RevenueGrowth} colClass="col-xl-6 col-lg-12 box-col-6 xl-50" chartHeight={335}/>
          <CommonChart title={SalesOverviewTitle} data={SalesOverviewChart} colClass="col-xl-6 col-lg-12 box-col-6 xl-50" chartHeight={335}/>
          <CommonChart title={MonthlyHistoryTitle} data={MonthlyHistoryChart} colClass="col-md-12 box-col-12" chartHeight={380}/>
        </Row>
        <Row>
          <CommonChart title={LiveProductsTitle} data={LiveProductsChart} colClass="xl-50 col-xl-7 col-lg-12" chartHeight={320}/>
          <CommonChart title={TurnOverTitle} data={TurnOverChart} colClass="xl-50 col-xl-5 col-lg-12" chartHeight={300}/>
          <CommonChart title={CryptocurrencyPricesTitle} data={CryptocurrencyPricesChart} colClass="xl-50 col-xl-6 col-lg-12" chartHeight={400}/>
          <CommonChart title={CryptoAnnotationsTitle} data={CryptoAnnotationsChart} colClass="xl-50 col-xl-6 col-lg-12" chartHeight={400}/>
        </Row>
        <Row>
          <CommonChart title={StockMarketTitle} data={StockMarketChart} colClass="col-sm-12 box-col-12" chartHeight={450}/>
          <CommonChart title={FinanceTitle} data={FinanceChart} colClass="col-xl-5 col-lg-12 box-col-5" chartHeight={350}/>
          <CommonChart title={OrderStatusTitle} data={OrderStatusChart} colClass="col-xl-7 col-lg-12 box-col-7" chartHeight={350}/>
          <CommonChart title={MonthlySalesTitle} data={MonthlySalesChart} colClass="xl-50 col-xl-5 col-lg-12 box-col-5" chartHeight={300}/>
          <CommonChart title={UsersTitle} data={UsesChart} colClass="xl-50 col-xl-7 col-lg-12 box-col-7" chartHeight={300}/>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ChartContainer;
