import { useState } from "react";
import { Disc } from "react-feather";
import { Card, CardBody, Col, Toast, ToastBody, ToastHeader } from "reactstrap";
import { TranslucentToastsTitle } from "../../../Constants";
import { TranslucentToastsData, TranslucentToastSubTitle } from "../../../Data/BonusUi/Toasts";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import CommonToast from "./Common/CommonToast";

const TranslucentToasts = () => {
  const [open, setOpen] = useState(true);
  return (
    <Col md="6">
      <Card className="overflow-hidden">
        <CommonCardHeader title={TranslucentToastsTitle} span={TranslucentToastSubTitle} />
        <CardBody className="toast-rtl bg-dark">
          <div className="toast-container">
            <Toast isOpen={open}>
              <ToastHeader icon={<Disc className="toast-icons toast-primary" />} toggle={() => setOpen(false)}>
                {"Berlin theme"}
                <small className="text-muted">{"11 mins ago"}</small>
              </ToastHeader>
              <ToastBody className="toast-dark">{"Hello, I'm a web-designer."}</ToastBody>
            </Toast>
            {TranslucentToastsData.map((data) => (
              <CommonToast key={data.id} icon={data.icon} strongText={data.strongText} smallClass={data.smallClass} smallText={data.smallText} bodyText={data.bodyText} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default TranslucentToasts;
