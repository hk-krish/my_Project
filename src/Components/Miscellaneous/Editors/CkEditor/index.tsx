import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { CkEditor, Editors } from "../../../../Constants";
import Editor from "./Editor";
import InlineEditor from "./InlineEditor";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const CkEditorContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={CkEditor} parent={Editors} />
      <Container fluid>
        <Row>
          <Editor />
          <InlineEditor />
        </Row>
      </Container>
    </Fragment>
  );
};

export default CkEditorContainer;
