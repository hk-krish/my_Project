import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { Blog, BlogDetailsTitle } from "../../../../Constants";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import BlogBoxGrid from "./BlogBoxGrid";
import BlogBoxList from "./BlogBoxList";
import BlogBoxShadow from "./BlogBoxShadow";

const BlogDetailsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={BlogDetailsTitle} parent={Blog} />
      <Container fluid>
        <Row>
          <BlogBoxShadow />
          <BlogBoxList />
          <BlogBoxGrid />
        </Row>
      </Container>
    </Fragment>
  );
};

export default BlogDetailsContainer;
