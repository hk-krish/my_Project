import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { LeafletMapTitle, MapTitle } from "../../../../Constants";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import AustraliaMap from "./AustraliaMap";
import IndiaMap from "./IndiaMap";
import UsaMap from "./UsaMap";
import WorldMap from "./WorldMap";

const LeafletMapsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={LeafletMapTitle} parent={MapTitle} />
      <Container fluid>
        <Row>
          <WorldMap />
          <UsaMap />
          <IndiaMap />
          <AustraliaMap />
        </Row>
      </Container>
    </Fragment>
  );
};
export default LeafletMapsContainer;
