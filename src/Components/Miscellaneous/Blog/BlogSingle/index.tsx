import { Fragment } from "react/jsx-runtime";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Blog, BlogGridsTitle } from "../../../../Constants";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import BlogBoxSingle from "./BlogBoxSingle";

const BlogSingleContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={BlogGridsTitle} parent={Blog} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <BlogBoxSingle />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default BlogSingleContainer;
