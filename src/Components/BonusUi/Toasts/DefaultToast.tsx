import { useState } from "react";
import { Card, CardBody, Col, Toast, ToastBody, ToastHeader } from "reactstrap";
import { DefaultToastTitle } from "../../../Constants";
import { ColorsSchemeSubTitle } from "../../../Data/BonusUi/Toasts";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const DefaultToast = () => {
  const [open, setOpen] = useState(true);
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={DefaultToastTitle} span={ColorsSchemeSubTitle} />
        <CardBody className="toast-rtl">
          <Toast className="default-show-toast" isOpen={open}>
            <ToastHeader className="toast-img" toggle={() => setOpen(false)}>
              <Image className="rounded me-2" src={dynamicImage(`dashboard-8/profile.png`)} alt="profile" />
              {"Berlin Theme"}
              <small>{"10 min ago"}</small>
            </ToastHeader>
            <ToastBody className="toast-dark">
              <strong className="txt-success">{"Well done!"}</strong> {"You successfully read this important message."}
            </ToastBody>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DefaultToast;
