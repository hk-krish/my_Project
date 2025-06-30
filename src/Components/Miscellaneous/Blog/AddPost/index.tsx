import { Fragment } from "react";
import { Button, Card, CardBody, Col, Container, Form, Row } from "reactstrap";
import { AddPostTitle, Blog, Discard, Post, PostEditTitle } from "../../../../Constants";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import PostEditForm from "./PostEditForm";
import CommonFileUpload from "../../../CoreComponents/CommonFileUpload";

const AddPostContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={AddPostTitle} parent={Blog} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={PostEditTitle} />
              <CardBody className="add-post">
                <PostEditForm />
                <Form>
                  <CommonFileUpload />
                </Form>
                <div className="btn-showcase text-end blog-btn">
                  <Button color="primary">{Post}</Button>
                  <Button color="transparent" className="bg-light font-dark">
                    {Discard}
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddPostContainer;
