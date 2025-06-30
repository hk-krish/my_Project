import { Card, CardBody, Col, Row } from "reactstrap";
import { HorizontalScrollbarTitle } from "../../../Constants";
import { HorizontalScrollSubTitle } from "../../../Data/BonusUi/Scrollable";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import ScrollBar from "react-perfect-scrollbar";

const HorizontalScrollbar = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={HorizontalScrollbarTitle} span={HorizontalScrollSubTitle} />
        <CardBody>
          <ScrollBar className="horizontal-scroll scroll-demo custom-container">
            <div className="horz-scroll-content scroll-content-width">
              <Row>
                {[...Array(6)].map((_, index) => (
                  <Col xs="2" key={index}>
                    <div className="horizontal-img">
                      <Image className="img-fluid" src={dynamicImage(`scrollbar/fashion${index + 1}.jpg`)} alt="girl" />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};
export default HorizontalScrollbar;
