import { useState } from "react";
import { Bell } from "react-feather";
import { Card, CardBody, Col, Toast, ToastBody, ToastHeader } from "reactstrap";
import { StackingToastsTitle } from "../../../Constants";
import { StackingToastsData, StackingToastsSubTitle } from "../../../Data/BonusUi/Toasts";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import CommonToast from "./Common/CommonToast";

const StackingToasts = () => {
  const [open, setOpen] = useState(true);
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={StackingToastsTitle} span={StackingToastsSubTitle} />
        <CardBody className="toast-rtl">
          <div className="toast-container position-static">
            <Toast isOpen={open}>
              <ToastHeader icon={<Bell className="toast-icons toast-primary" />} toggle={() => setOpen(false)}>
                {"Berlin theme"}
                <small className="txt-danger">{"just now"}</small>
              </ToastHeader>
              <ToastBody className="toast-dark">{"Hello, I'm a web-designer."}</ToastBody>
            </Toast>
            {StackingToastsData.map((data) => (
              <CommonToast key={data.id} icon={data.icon} strongText={data.strongText} smallClass="txt-muted" smallText={data.smallText} bodyText={data.bodyText} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default StackingToasts;
