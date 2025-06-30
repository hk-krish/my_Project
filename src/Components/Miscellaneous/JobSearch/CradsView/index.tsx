import { Col, Container, Row } from "reactstrap";
import { CardsView, JobSearch } from "../../../../Constants";
import LeftSidebar from "../Common/LeftSidebar";
import RightSidebarCards from "../Common/RightSidebarCards";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const CardsViewContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={CardsView} parent={JobSearch} />
      <Container fluid>
        <Row>
          <LeftSidebar />
          <Col xl="9" className="xl-60 box-col-12">
            <Row>
              <RightSidebarCards startLimit={0} colClass="col-xl-6 xl-100" />
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CardsViewContainer;
