import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { GeneralTitle, WidgetTitle } from "../../../../Constants";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import CustomerGrowth from "../../Dashboards/ECommerce/CustomerGrowth";
import LatestOfferProduct from "../../Dashboards/ECommerce/LatestOfferProduct";
import Summary from "../../Dashboards/ECommerce/Summary";
import TotalSale from "../../Dashboards/ECommerce/TotalSale";
import WeeklyUserActivity from "../../Dashboards/ECommerce/WeeklyUserActivity";
import RecentStatistics from "../../Dashboards/Default/RecentStatistics";
import SalesStats from "../../Dashboards/Default/SalesStats";

const GeneralContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={GeneralTitle} parent={WidgetTitle} />
      <Container fluid className="ecommerce-dashboard">
        <Row>
          <TotalSale />
          <Summary />
          <CustomerGrowth colClass="col-xl-6 proorders-xl-3 box-col-12" />
          <LatestOfferProduct colClass="proorders-xl-5 col-xxl-6" />
          <WeeklyUserActivity colClass="col-lg-6" />
          <RecentStatistics colClass="col-xxl-4 proorders-xl-7 col-lg-6" />
          <SalesStats colClass="col-xxl-4 proorders-xl-4 col-xl-6" />
        </Row>
      </Container>
    </Fragment>
  );
};

export default GeneralContainer;
