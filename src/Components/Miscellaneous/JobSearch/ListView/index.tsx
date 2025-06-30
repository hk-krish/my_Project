import { Fragment } from "react/jsx-runtime";
import { Col, Container, Row } from "reactstrap";
import { JobList, JobSearch } from "../../../../Constants";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import LeftSidebar from "../Common/LeftSidebar";
import RightSidebarCards from "../Common/RightSidebarCards";

const ListViewContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={JobList} parent={JobSearch} />
      <Container fluid>
        <Row>
          <LeftSidebar />
          <Col xl="9" className="xl-60 box-col-12">
            <RightSidebarCards startLimit={0} endLimit={8} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default ListViewContainer;
