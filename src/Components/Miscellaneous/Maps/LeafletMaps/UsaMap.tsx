import { MapContainer, TileLayer } from "react-leaflet";
import { Card, CardBody, Col } from "reactstrap";
import { UsaMapTitle } from "../../../../Constants";
import { UsaMapProps, UsaMapSubHeading } from "../../../../Data/Miscellaneous/Maps";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";

const UsaMap = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={UsaMapTitle} span={UsaMapSubHeading} />
        <CardBody className="map-z-index">
          <MapContainer className="jvector-map-height custom-map" {...UsaMapProps}>
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default UsaMap;
