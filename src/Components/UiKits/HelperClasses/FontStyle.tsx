import { Card, CardBody, Col } from "reactstrap";
import { FontStyleTitle } from "../../../Constants";
import { FontStyleData, FontStyleSubTitle } from "../../../Data/UiKits/HelperClasses";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const FontStyle = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={FontStyleTitle} span={FontStyleSubTitle} />
        <CardBody>
          {FontStyleData &&
            FontStyleData.map((item, index) => (
              <p className={`f-s-${item}`} key={index}>
                {"This is a "} <strong>{`.f-s-${item}`}</strong> {"font-style"}
              </p>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default FontStyle;
