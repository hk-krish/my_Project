import { Card, CardBody, Col, Row } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { LeftSideRibbonsTitle } from "../../../Constants";
import { LeftRibbonSubTitle, LeftSideData } from "../../../Data/BonusUi/Ribbons";

const LeftSideRibbons = () => {
  return (
    <Row>
      <Col sm="12" xl="12">
        <Card>
          <CommonCardHeader title={LeftSideRibbonsTitle} span={LeftRibbonSubTitle} />
          <CardBody>
            <Row className="g-3">
              {LeftSideData &&
                LeftSideData.map((item, index) => (
                  <Col xl="4" sm="6" key={index}>
                    <div className={item.classMain}>
                      <div className={item.ribbonClass}>{item.ribbonText}</div>
                      {item.subText}
                    </div>
                  </Col>
                ))}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export default LeftSideRibbons;
