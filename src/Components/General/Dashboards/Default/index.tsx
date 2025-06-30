import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Dashboard, DefaultDashboard } from "../../../../Constants";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import LastOrders from "./LastOrders";
import LatestSales from "./LatestSales";
import MonthlyInvoices from "./MonthlyInvoices";
import Notification from "./Notification";
import PremiumCoursesCard from "./PremiumCoursesCard";
import ProjectSummary from "./ProjectSummary";
import RecentActivity from "./RecentActivity";
import RecentStatistics from "./RecentStatistics";
import SalesStatistic from "./SalesStatistic";
import SalesStats from "./SalesStats";

const DefaultContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={DefaultDashboard} parent={Dashboard} />
      <Container fluid className="default-dashboard">
        <Row>
          <PremiumCoursesCard />
          <RecentActivity />
          <SalesStats colClass="col-xl-3 col-md-6 proorder-md-3 box-col-6"/>
          <LatestSales />
          <LastOrders />
          <MonthlyInvoices />
          <RecentStatistics colClass="col-xl-4 col-md-6 proorder-md-7 box-col-6"/>
          <Notification />
          <ProjectSummary />
          <SalesStatistic />
        </Row>
      </Container>
    </Fragment>
  );
};

export default DefaultContainer;
