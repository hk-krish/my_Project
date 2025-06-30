import { MapContainer, TileLayer } from "react-leaflet";
import { Card, CardBody, Col } from "reactstrap";
import { WorldMapTitle } from "../../../../Constants";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { WorldMapProps, WorldMapSubheading } from "../../../../Data/Miscellaneous/Maps";

const WorldMap = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={WorldMapTitle} span={WorldMapSubheading} />
        <CardBody className="map-z-index">
          <MapContainer className="jvector-map-height custom-map" {...WorldMapProps}>
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WorldMap;
