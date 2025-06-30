import { Container, Row } from "reactstrap";
import { BasicInitTitle, DataTitle } from "../../../../../Constants";
import ZeroConfigurationTable from "./ZeroConfigurationTable";
import StateSavingTable from "./StateSavingTable";
import ScrollVerticalDynamicHeight from "./ScrollVerticalDynamicHeight";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const BasicInitContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={BasicInitTitle} parent={DataTitle} />
      <Container fluid>
        <Row>
          <ZeroConfigurationTable />
          <StateSavingTable />
          <ScrollVerticalDynamicHeight />
        </Row>
      </Container>
    </Fragment>
  );
};

export default BasicInitContainer;
