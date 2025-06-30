import { Card, CardBody, Col, Input, Label } from "reactstrap";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { IconsUncheckedBordersSwitchData } from "../../../../../Data/Forms&Table/Forms/FormWidgets";
import { Fragment } from "react/jsx-runtime";

const IconUncheckedBorderSwitch = () => {
  return (
    <Fragment>
      {IconsUncheckedBordersSwitchData.map((data) => (
        <Col xl="4" className={data.id !== 3 ? "col-sm-6" : ""} key={data.id}>
          <Card className="height-equal">
            <CommonCardHeader title={data.title} span={data.subTitle} />
            <CardBody className="common-flex flex-column switch-wrapper">
              {data.child.map((item) => (
                <div className="d-flex" key={item.id}>
                  <div className={`text-end ${item.mediaBodyClass ? item.mediaBodyClass : ""}`}>
                    <Label className="switch mb-0">
                      <Input type="checkbox" defaultChecked />
                      <span className={`switch-state bg-${item.color}`}></span>
                    </Label>
                  </div>
                  <Label className="col-form-label m-l-10">{item.labelText}</Label>
                </div>
              ))}
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default IconUncheckedBorderSwitch;
