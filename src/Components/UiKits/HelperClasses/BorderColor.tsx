import { Card, CardBody, Col } from "reactstrap";
import { BorderColorTitle } from "../../../Constants";
import { BorderColorSubTitle, BorderSideColorData } from "../../../Data/UiKits/HelperClasses";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const BorderColor = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={BorderColorTitle} span={BorderColorSubTitle} />
        <CardBody>
          <div className="gradient-border">
            {BorderSideColorData &&
              BorderSideColorData.map((item, index) => (
                <div className="helper-common-box" key={index}>
                  <div className={`helper-box ${item} border fill-wrapper`} />
                  <span>{`.${item}`}</span>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BorderColor;
