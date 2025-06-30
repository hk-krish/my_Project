import { Card, CardBody, Col, Input, Label } from "reactstrap";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { SwitchSizingIconsData } from "../../../../../Data/Forms&Table/Forms/FormWidgets";
import { Fragment } from "react/jsx-runtime";

const SwitchSizingIcons = () => {
  return (
    <Fragment>
      {SwitchSizingIconsData.map((data) => (
        <Col md="12" key={data.id}>
          <Card>
            <CommonCardHeader title={data.title} span={data.subTitle} />
            <CardBody className="common-flex switch-wrapper">
              {data.child.map((item) => (
                <div className="d-flex" key={item.id}>
                  <Label className="col-form-label m-r-10">{item.labelText}</Label>
                  <div className={`text-end ${item.size ? item.size : ""}`}>
                    <Label className="switch">
                      <Input type="checkbox" defaultChecked={item.check ? true : false} disabled={item.disabled ? true : false} />
                      <span className={`switch-state ${item.spanClass ? item.spanClass : ""}`}></span>
                    </Label>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default SwitchSizingIcons;
