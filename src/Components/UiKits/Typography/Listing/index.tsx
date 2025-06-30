import { Card, CardBody, Col, Row } from "reactstrap";
import { ListingTypography } from "../../../../Constants";
import { ListingSubTitle } from "../../../../Data/UiKits/Typography";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import DescriptionList from "./DescriptionList";
import OrderList from "./OrderList";
import UnOrderList from "./UnOrderList";

const Listing = () => {
  return (
    <Col sm="12" className="listing">
      <Card>
        <CommonCardHeader title={ListingTypography} span={ListingSubTitle} />
        <CardBody>
          <Row className="g-3">
            <UnOrderList />
            <OrderList />
            <DescriptionList />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Listing;
