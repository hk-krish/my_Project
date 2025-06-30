import { Fragment } from "react/jsx-runtime";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { ProgressType } from "../../../../Types/UiKitsType";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";

const CommonProgress:React.FC<ProgressType> = ({ title, span, data, striped, animated, tag, progressClass, value }) => {
  return (
    <Card>
      <CommonCardHeader title={title} span={span} />
      <CardBody className={`progress-showcase`}>
        <Row>
          <Col>
            {data &&
              data.map((item, index) => (
                <Fragment key={index}>
                  {tag && <h6 className="mb-2">{item.text}</h6>}
                  <Progress className={progressClass} key={index} style={{ height: item.text }} color={item.class} value={item.value} striped={striped} animated={animated}>
                    {value && item.value + "%"}
                  </Progress>
                </Fragment>
              ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default CommonProgress;
