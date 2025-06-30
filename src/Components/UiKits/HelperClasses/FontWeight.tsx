import { Card, CardBody, Col } from "reactstrap";
import { FontWeightTitle } from "../../../Constants";
import { FontWeightData, FontWeightSubTitle } from "../../../Data/UiKits/HelperClasses";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const FontWeight = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={FontWeightTitle} span={FontWeightSubTitle} />
        <CardBody>
          {FontWeightData &&
            FontWeightData.map((item, index) => (
              <div className="helper-common-box" key={index}>
                <div className={`f-w-${item.class}`}>{item.text}</div>
              </div>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default FontWeight;
