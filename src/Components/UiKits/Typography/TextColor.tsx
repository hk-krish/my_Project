import { Card, CardBody, Col } from "reactstrap";
import { TextColorTitle } from "../../../Constants";
import { TextColorData, TextColorSubTitle } from "../../../Data/UiKits/Typography";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const TextColor = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={TextColorTitle} span={TextColorSubTitle} />
        <CardBody>
          <div className="d-flex flex-column gap-2">
            {TextColorData &&
              TextColorData.map((item, index) => (
                <p key={index} className={`mb-0 txt-${item.class}`}>
                  {item.text} <code>{`.txt-${item.class}`}</code> {"class"}
                </p>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default TextColor;
