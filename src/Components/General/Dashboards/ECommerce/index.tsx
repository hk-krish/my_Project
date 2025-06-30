import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Dashboard, ECommerceDashboard } from "../../../../Constants";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import CustomerGrowth from "./CustomerGrowth";
import LatestOfferProduct from "./LatestOfferProduct";
import RecentOrders from "./RecentOrders";
import SalesDetails from "./SalesDetails";
import SellingProduct from "./SellingProduct";
import Summary from "./Summary";
import TopTransaction from "./TopTransaction";
import TotalSale from "./TotalSale";
import WeeklyUserActivity from "./WeeklyUserActivity";

const ECommerceContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ECommerceDashboard} parent={Dashboard} />
      <Container fluid className="ecommerce-dashboard">
        <Row>
          <TotalSale />
          <Summary />
          <RecentOrders />
          <CustomerGrowth colClass="proorder-xl-4 box-col-6 col-lg-6 col-xl-5"/>
          <TopTransaction />
          <WeeklyUserActivity colClass="col-md-6 box-col-6"/>
          <SellingProduct />
          <SalesDetails />
          <LatestOfferProduct colClass="proorder-xl-8 col-xl-6"/>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ECommerceContainer;
