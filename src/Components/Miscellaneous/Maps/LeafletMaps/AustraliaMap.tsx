import { MapContainer, TileLayer } from "react-leaflet";
import { Card, CardBody, Col } from "reactstrap";
import { AustraliaMapTitle } from "../../../../Constants";
import { AustraliaMapProps, AustraliaMapSubHeading } from "../../../../Data/Miscellaneous/Maps";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";

const AustraliaMap = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={AustraliaMapTitle} span={AustraliaMapSubHeading} />
        <CardBody className="map-z-index">
          <MapContainer className="jvector-map-height custom-map" {...AustraliaMapProps}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default AustraliaMap;
