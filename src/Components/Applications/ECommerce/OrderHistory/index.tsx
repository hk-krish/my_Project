import { Fragment } from "react/jsx-runtime";
import { Col, Container, Row } from "reactstrap";
import { Cancelled, CancelledOrder, ECommerce, NewOrder, Processing, RecentOrdersTitle, Shipped, ShippedOrder } from "../../../../Constants";
import CommonOrders from "./OrderHistoryData/CommonOrders";
import DataTableOrderHistory from "./OrderHistoryData/DataTableOrderHistory";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const OrderHistoryContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={RecentOrdersTitle} parent={ECommerce} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <CommonOrders title={NewOrder} btn={Processing} color={"primary"} />
            <CommonOrders title={ShippedOrder} btn={Shipped} color={"success"} />
            <CommonOrders title={CancelledOrder} btn={Cancelled} color={"danger"} />
          </Col>
          <DataTableOrderHistory />
        </Row>
      </Container>
    </Fragment>
  );
};

export default OrderHistoryContainer;
