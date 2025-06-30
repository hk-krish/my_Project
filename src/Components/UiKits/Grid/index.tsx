import { Container, Row } from "reactstrap";
import GridOptions from "./GridOptions";
import { Grid, UIKits } from "../../../Constants";
import GridColumn from "./GridColumn";
import VerticalAlignment from "./VerticalAlignment";
import HorizontalAlignment from "./HorizontalAlignment";
import Nesting from "./Nesting";
import Order from "./Order";
import OffSet from "./OffSet";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const GridContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Grid} parent={UIKits} />
      <Container fluid>
        <Row>
          <GridOptions />
          <GridColumn />
          <VerticalAlignment />
          <HorizontalAlignment />
          <Nesting />
          <Order />
          <OffSet />
        </Row>
      </Container>
    </Fragment>
  );
};
export default GridContainer;
