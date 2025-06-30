import { Col, Container, Row } from "reactstrap";
import LearningFilter from "../Common/LearningFilter";
import BlogBoxGrid from "./BlogBoxGrid";
import BlogBoxList from "./BlogBoxList";
import { LearningListTitle, LearningTitle } from "../../../../Constants";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const LearningListContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={LearningListTitle} parent={LearningTitle} />
      <Container fluid>
        <Row>
          <Col xl="9" className="xl-60 order-xl-0 order-1 box-col-12">
            <Row>
              <BlogBoxList />
              <BlogBoxGrid />
            </Row>
          </Col>
          <LearningFilter />
        </Row>
      </Container>
    </Fragment>
  );
};
export default LearningListContainer;
