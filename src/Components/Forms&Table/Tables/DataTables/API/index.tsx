import { Container, Row } from "reactstrap";
import AddRows from "./AddRows";
import ChildRows from "./ChildRows";
import CustomFiltering from "./CustomFiltering";
import RowSelectionAndDeletion from "./RowSelectionAndDeletion";
import { APIDataTablesTitle, DataTitle } from "../../../../../Constants";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const APIContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={APIDataTablesTitle} parent={DataTitle} />
      <Container fluid>
        <Row>
          <AddRows />
          <ChildRows />
          <RowSelectionAndDeletion />
          <CustomFiltering />
        </Row>
      </Container>
    </Fragment>
  );
};
export default APIContainer;
