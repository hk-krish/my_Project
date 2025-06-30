import { MapContainer, TileLayer } from "react-leaflet";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { CustomerGrowthTitle } from "../../../../Constants";
import { CustomerGrowthData, Setting } from "../../../../Data/General/Dashboard/ECommerce";
import { CustomerGrowthType } from "../../../../Types/GenerType";
import { dynamicImage, Image } from "../../../../Utils";
import DashboardHeader from "../Common/DashboardHeader";

const CustomerGrowth: React.FC<CustomerGrowthType> = ({ colClass }) => {
  return (
    <Col className={colClass}>
      <Card>
        <DashboardHeader title={CustomerGrowthTitle} headerClass="custom-border-bottom" dropdownClass="setting-menu" dropdownToggleClass="dropdown-toggle" />
        <CardBody>
          <Row>
            <Col xxl="8">
              <div className="map-world">
                <div className="map">
                  <div className="jvector-map-height" id="world-map2">
                    <MapContainer className="jvector-map-height" {...Setting}>
                      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                    </MapContainer>
                  </div>
                </div>
              </div>
            </Col>
            <Col xxl="4" className="d-xxl-block d-none">
              <ul className="customer-growth">
                {CustomerGrowthData.map((country, index) => (
                  <li key={index}>
                    <div className="customer-details">
                      <Image src={dynamicImage(`dashboard-2/flags/${country.flag}`)} alt="flag" />
                      <div>
                        <h6 className="f-w-600 f-14">{country.name}</h6>
                        <span className="f-w-600">{country.percentage}%</span>
                      </div>
                    </div>
                    <Progress className="progress-striped-primary b-r-2" color="transparent" value={country.percentage} />
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomerGrowth;
