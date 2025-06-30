import { Fragment } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Apps, ProjectCreateTitle } from "../../../../Constants";
import CreateNewProjectForm from "./CreateNewProjectForm";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const CreateNewContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ProjectCreateTitle} parent={Apps} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <CreateNewProjectForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CreateNewContainer;
