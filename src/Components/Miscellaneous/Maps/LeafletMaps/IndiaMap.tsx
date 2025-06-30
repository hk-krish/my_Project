import { MapContainer, TileLayer } from "react-leaflet";
import { Card, CardBody, Col } from "reactstrap";
import { IndiaMapTitle } from "../../../../Constants";
import { IndiaMapProps, IndiaMapSubHeading } from "../../../../Data/Miscellaneous/Maps";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";

const IndiaMap = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={IndiaMapTitle} span={IndiaMapSubHeading} />
        <CardBody className="map-z-index">
          <MapContainer className="jvector-map-height custom-map" {...IndiaMapProps}>
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default IndiaMap;
