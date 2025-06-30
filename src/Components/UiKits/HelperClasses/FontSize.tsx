import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { FontSizeText, FontSizeTitle } from "../../../Constants";
import { FontSizeData, FontSizeSubTitle } from "../../../Data/UiKits/HelperClasses";

const FontSize = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={FontSizeTitle} span={FontSizeSubTitle} />
        <CardBody>
          <div className="gradient-border">
            {FontSizeData &&
              FontSizeData.map((item, index) => (
                <div className="font-wrapper border" key={index}>
                  <div className={`f-${item}`}>
                    {FontSizeText} {`.f-${item}`}
                  </div>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default FontSize;
