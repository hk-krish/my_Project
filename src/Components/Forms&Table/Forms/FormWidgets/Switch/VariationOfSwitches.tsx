import { Fragment } from "react";
import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { VariationOfSwitchesTitle } from "../../../../../Constants";
import { VariationOfSwitchSubTitle, VariationSwitchesData1, VariationSwitchesData2 } from "../../../../../Data/Forms&Table/Forms/FormWidgets";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";

const VariationOfSwitches = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={VariationOfSwitchesTitle} span={VariationOfSwitchSubTitle} />
        <CardBody className="switch-wrapper">
          <ul className="tg-list common-flex simple-list flex-row">
            {VariationSwitchesData1.map((data) => (
              <Fragment key={data.id}>
                <li className="tg-list-item">
                  <Input className={`tgl tgl-${data.class}`} id={`cb${data.id}`} type="checkbox" />
                  <Label className="tgl-btn text-white" data-tg-off={data.off} data-tg-on={data.on} htmlFor={`cb${data.id}`} />
                </li>
                <li><p>{data.text}</p></li>
              </Fragment>
            ))}
            {VariationSwitchesData2.map((data) => (
              <Fragment key={data.id}>
                <li className="tg-list-item">
                  <div className="d-flex">
                    <div className={`text-end ${data.id === 1 ? "icon-state" : ""}`}>
                      <Label className="switch mb-0 square-checked">
                        <Input type="checkbox" defaultChecked />
                        <span className={`switch-state bg-${data.color} rounded-2`}></span>
                      </Label>
                    </div>
                  </div>
                </li>
                <li><p>{data.text}</p></li>
              </Fragment>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};
export default VariationOfSwitches;
