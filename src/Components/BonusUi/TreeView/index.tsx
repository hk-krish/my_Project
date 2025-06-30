import { Fragment } from "react/jsx-runtime";
import { Col, Container, Row } from "reactstrap";
import { BonusUi, TreeViewTitle } from "../../../Constants";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import BasicTrees from "./BasicTrees";
import DisabledTree from "./DisabledTree";

const TreeViewContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={TreeViewTitle} parent={BonusUi} />
      <Container fluid>
        <Row>
          <Col md="6">
            <BasicTrees />
          </Col>
          <Col md="6">
            <DisabledTree />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default TreeViewContainer;
