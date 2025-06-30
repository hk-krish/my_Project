import { Container, Row } from "reactstrap";
import ClipboardOnParagraph from "./ClipboardOnParagraph";
import ClipboardOnTextArea from "./ClipboardOnTextArea";
import ClipboardOnTextInput from "./ClipboardOnTextInput";
import CopyPortionFromParagraph from "./CopyPortionFromParagraph";
import { ClipBoardTitle, FormWidgetsTitle } from "../../../../../Constants";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const ClipboardContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ClipBoardTitle} parent={FormWidgetsTitle} />
      <Container fluid>
        <Row>
          <ClipboardOnTextInput />
          <ClipboardOnTextArea />
          <ClipboardOnParagraph />
          <CopyPortionFromParagraph />
        </Row>
      </Container>
    </Fragment>
  );
};
export default ClipboardContainer;
