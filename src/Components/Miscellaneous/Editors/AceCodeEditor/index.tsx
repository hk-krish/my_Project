import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { ACECodeEditor, Editors } from "../../../../Constants";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import CssMode from "./CssMode";
import HtmlMode from "./HtmlMode";
import JavascriptMode from "./JavascriptMode";
import PhpMode from "./PhpMode";

const AceCodeEditorContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ACECodeEditor} parent={Editors} />
      <Container fluid>
        <Row>
          <JavascriptMode />
          <HtmlMode />
          <CssMode />
          <PhpMode />
        </Row>
      </Container>
    </Fragment>
  );
};
export default AceCodeEditorContainer;
