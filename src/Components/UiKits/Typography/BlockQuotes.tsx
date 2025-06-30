import { Card, CardBody, Col } from "reactstrap";
import { BlockquotesTitle } from "../../../Constants";
import { BlockQuotesData, BlockQuotesSubTitle } from "../../../Data/UiKits/Typography";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const BlockQuotesCard = () => {
  return (
    <Col sm="12">
      <Card className="overflow-hidden">
        <CommonCardHeader title={BlockquotesTitle} span={BlockQuotesSubTitle} />
        <CardBody>
          {BlockQuotesData &&
            BlockQuotesData.map((item, index) => (
              <div key={index} className={`figure d-block dark-blockquote ${item.class ? item.class : ""}`}>
                <blockquote className="blockquote light-card">
                  <p className="mb-0 txt-dark">{item.text}</p>
                  <span className="blockquote-footer pt-3">{item.footer}</span>
                </blockquote>
              </div>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default BlockQuotesCard