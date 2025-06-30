import { Container, Row } from "reactstrap";
import { DetailedCourseTitle, LearningTitle } from "../../../../Constants";
import LearningFilter from "../Common/LearningFilter";
import BlogDetails from "./BlogDetails/BlogDetails";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const DetailedCourseContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={DetailedCourseTitle} parent={LearningTitle} />
      <Container fluid>
        <Row>
          <BlogDetails />
          <LearningFilter />
        </Row>
      </Container>
    </Fragment>
  );
};
export default DetailedCourseContainer;
