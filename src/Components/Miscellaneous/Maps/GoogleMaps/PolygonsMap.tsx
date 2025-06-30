import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Card, CardBody, Col } from "reactstrap";
import { PolygonsTitle } from "../../../../Constants";
import { ContainerStyle, DefaultCenter } from "../../../../Data/Miscellaneous/Maps";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";

const PolygonsMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjeJEPREBQFvAIqDSZliF0WjQrCld-Mh0",
  });
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={PolygonsTitle} />
        <CardBody className="z-1">
          <div className="map-js-height">
            <div id="gmap-simple" className="map-block">
              {isLoaded ? <GoogleMap mapContainerStyle={ContainerStyle} center={DefaultCenter} zoom={10}></GoogleMap> : "loading"}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default PolygonsMap