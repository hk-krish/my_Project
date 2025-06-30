import { Fragment } from "react";
import { Card, CardBody, Col, Input, Label, Row } from "reactstrap";
import { AnimatedButtonsTitle } from "../../../../../Constants";
import { AnimatedButtonsData, AnimatedButtonsSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";

const AnimatedButtons = () => {
  return (
    <Col xl="6" className="animate_btn_custom">
      <Card>
        <CommonCardHeader title={AnimatedButtonsTitle} span={AnimatedButtonsSubTitle} />
        <CardBody>
          <Row className="g-3">
            {AnimatedButtonsData.map((data) => (
              <Col sm="6" key={data.id}>
                <div className="card-wrapper border rounded-3 checkbox-checked">
                  <h6 className="sub-title">{data.title}</h6>
                  {data.child.map((item) => (
                    <Fragment key={item.id}>
                      <Label className="d-block"></Label>
                      <Input className={`${item.type}_animated`} type={item.type} defaultChecked={item.check ? true : false} name={item.type === "radio" ? item.name : ""} />
                      {item.text}
                    </Fragment>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default AnimatedButtons;
