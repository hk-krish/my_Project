import { Container, Row } from "reactstrap";
import { ApplyButton, JobSearch } from "../../../../Constants";
import LeftSidebar from "../Common/LeftSidebar";
import ApplyForm from "./ApplyForm/ApplyForm";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const ApplyJobsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ApplyButton} parent={JobSearch} />
      <Container fluid>
        <Row>
          <LeftSidebar />
          <ApplyForm />
        </Row>
      </Container>
    </Fragment>
  );
};
export default ApplyJobsContainer;
