import { Fragment } from "react";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";
import { Href } from "../../../Constants";
import { LinkLightSubTitle } from "../../../Data/UiKits/Alert";
import { CommonLinkColorType } from "../../../Types/UiKitsType";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const CommonLinkColor: React.FC<CommonLinkColorType> = ({ title, data, text, bodyClass ,icon}) => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={title} span={LinkLightSubTitle} />
        <CardBody className={bodyClass}>
          <Row>
            {data &&
              data.map((item, index) => (
                <Col xl="6" key={index}>
                  {item.data &&
                    item.data.map((item, index) => (
                      <Fragment key={index}>
                        {text && <p className="mb-1">{item.text}</p>}
                        <Alert color={item.class}>
                          {icon && <div>{item.icons}</div>}
                          <p className={`txt-${item.textClass}`}>
                            {"This "}
                            <a className={`alert-link txt-${item.textClass}`} href={Href}>
                              {`"${item.alertText}"`}
                            </a>
                            {"  class can be used to create an alert like this one."}
                          </p>
                        </Alert>
                      </Fragment>
                    ))}
                </Col>
              ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CommonLinkColor;
