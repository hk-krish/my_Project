import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { ECommerce, Wishlist } from "../../../../Constants";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { WishlistData } from "./WishlistData";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const WishlistContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Wishlist} parent={ECommerce} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={Wishlist} />
              <CardBody>
                <WishlistData />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default WishlistContainer;
