import { Card, CardBody, Col, Row } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { RightSideRibbonTitle } from "../../../Constants";
import { RightRibbonSubTitle, RightSideData } from "../../../Data/BonusUi/Ribbons";

const RightSideRibbon = () => {
  return (
    <Row>
      <Col sm="12" xl="12">
        <Card>
          <CommonCardHeader title={RightSideRibbonTitle} span={RightRibbonSubTitle} />
          <CardBody>
            <Row className="g-3">
              {RightSideData &&
                RightSideData.map((item, index) => (
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
export default RightSideRibbon;
