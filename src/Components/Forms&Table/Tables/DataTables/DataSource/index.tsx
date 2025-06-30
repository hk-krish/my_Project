import { Container, Row } from "reactstrap";
import AjaxSourcedData from "./AjaxSourcedData";
import HtmlSourcedData from "./HtmlSourcedData";
import JavascriptSourcedData from "./JavascriptSourcedData";
import ServerSideProcessing from "./ServerSideProcessing";
import { DATASourceDataTablesTitle, DataTitle } from "../../../../../Constants";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const DataSourceContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={DATASourceDataTablesTitle} parent={DataTitle} />
      <Container fluid>
        <Row>
          <HtmlSourcedData />
          <AjaxSourcedData />
          <JavascriptSourcedData />
          <ServerSideProcessing />
        </Row>
      </Container>
    </Fragment>
  );
};
export default DataSourceContainer;
