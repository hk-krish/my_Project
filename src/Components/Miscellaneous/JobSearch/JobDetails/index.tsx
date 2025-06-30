import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { JobDetails, JobSearch } from "../../../../Constants";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import LeftSidebar from "../Common/LeftSidebar";
import JobDetailsRightCards from "./JobDetailsRightCards";

const JobDetailsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={JobDetails} parent={JobSearch} />
      <Container fluid>
        <Row>
          <LeftSidebar />
          <JobDetailsRightCards />
        </Row>
      </Container>
    </Fragment>
  );
};
export default JobDetailsContainer;
