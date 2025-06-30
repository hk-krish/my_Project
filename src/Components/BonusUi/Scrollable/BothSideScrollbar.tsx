import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, Row } from "reactstrap";
import { BothSideScrollbarTitle } from "../../../Constants";
import { BothSideScroll, BothSideScrollSubTitle } from "../../../Data/BonusUi/Scrollable";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const BothSideScrollbar = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={BothSideScrollbarTitle} span={BothSideScrollSubTitle} />
        <CardBody>
          <div className="scroll-bar-wrap">
            <ScrollBar className="visible-scroll always-visible scroll-demo custom-container">
              <div className="horz-scroll-content scroll-content-width">
                <Row>
                  {BothSideScroll &&
                    BothSideScroll.map((item, index) => (
                      <Col sm="3" key={index}>
                        {item.text}
                      </Col>
                    ))}
                </Row>
              </div>
            </ScrollBar>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BothSideScrollbar;
