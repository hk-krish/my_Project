import { Container, Row } from "reactstrap";
import { AdvanceInitTitle, DataTitle } from "../../../../../Constants";
import RowCreateCallback from "./RowCreateCallback";
import StockResult from "./StockResult";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const AdvanceInitContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={AdvanceInitTitle} parent={DataTitle} />
      <Container fluid>
        <Row>
          <StockResult />
          <RowCreateCallback />
        </Row>
      </Container>
    </Fragment>
  );
};
export default AdvanceInitContainer;
