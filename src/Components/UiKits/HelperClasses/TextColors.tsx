import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { TextColorsBig } from "../../../Constants";
import { BorderColorData, TextColorSubTitle } from "../../../Data/UiKits/HelperClasses";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const TextColors = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={TextColorsBig} span={TextColorSubTitle} />
        <CardBody>
          {BorderColorData &&
            BorderColorData.slice(0, 7).map((item, index) => (
              <Fragment key={index}>
                <div className="helper-common-box"></div>
                <div className={`font-${item.color}`}>
                  {"This is a "} <strong>{`font-${item.color}`}</strong> {`text used class as .font-${item.color}`}
                </div>
              </Fragment>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default TextColors;
