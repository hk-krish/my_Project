import { Col, Container, Row } from "reactstrap";
import { Apps, ProjectLists } from "../../../../Constants";
import ProjectListHead from "./ProjectListHead";
import ProjectListTabContent from "./ProjectListTabContent";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const ProjectListContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ProjectLists} parent={Apps} />
      <Container fluid>
        <Row className="project-cards">
          <Col md="12" className="project-list">
            <ProjectListHead />
          </Col>
          <Col sm="12">
            <ProjectListTabContent />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProjectListContainer;
