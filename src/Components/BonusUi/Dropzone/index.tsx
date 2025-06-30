import { Container, Row } from "reactstrap";
import DefaultDropzone from "./DefaultDropzone";
import ImagePreview from "./ImagePreview";
import MultiFileUpload from "./MultiFileUpload";
import SingleFileUpload from "./SingleFileUpload";
import { BonusUi, DropzoneTitle } from "../../../Constants";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const DropzoneContainer = () => {
  return (
    <Fragment>
    <Breadcrumbs mainTitle={DropzoneTitle} parent={BonusUi} />
      <Container fluid>
        <Row>
          <DefaultDropzone />
          <ImagePreview />
          <SingleFileUpload />
          <MultiFileUpload />
        </Row>
      </Container>
    </Fragment>
  );
};
export default DropzoneContainer;
