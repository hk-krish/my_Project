import { Fragment } from "react";
import { Container } from "reactstrap";
import { Editors, MDEEditor } from "../../../../Constants";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import MdeExampleOne from "./MdeExampleOne";
import MdeExampleTwo from "./MdeExampleTwo";

const MdeEditorContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={MDEEditor} parent={Editors} />
      <Container fluid>
        <MdeExampleOne />
        <MdeExampleTwo />
      </Container>
    </Fragment>
  );
};

export default MdeEditorContainer;
