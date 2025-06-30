import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { GoogleMapTitle, MapTitle } from "../../../../Constants";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";
import BasicMap from "./BasicMap";
import MarkerMaps from './MarkerMaps';
import PolygonsMap from './PolygonsMap';
import PolylineMaps from './PolylineMaps';

const GoogleMapsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={GoogleMapTitle} parent={MapTitle} />
      <Container fluid>
        <Row>
          <BasicMap />
          <MarkerMaps/>
          <PolygonsMap/>
          <PolylineMaps/>
        </Row>
      </Container>
    </Fragment>
  );
};
export default GoogleMapsContainer;
