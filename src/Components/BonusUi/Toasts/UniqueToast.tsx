import { useState } from "react";
import { Card, CardBody, Col, Toast, ToastHeader } from "reactstrap";
import { dynamicImage, Image } from "../../../Utils";
import UniqueToastContent from "./Common/UniqueToastContent";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { UniqueToastTitle } from "../../../Constants";
import { ColorsSchemeSubTitle } from "../../../Data/BonusUi/Toasts";

const UniqueToast = () => {
  const [visible, setVisible] = useState(true);
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={UniqueToastTitle} span={ColorsSchemeSubTitle} />
        <CardBody className="toast-rtl">
          <Toast isOpen={visible} fade>
            <ToastHeader className="toast-img" toggle={() => setVisible(!visible)}>
              <Image className="rounded me-2" src={dynamicImage(`dashboard-8/profile.png`)} alt="profile" />
              <strong className="me-auto">{"Berlin Theme"}</strong>
            </ToastHeader>
            <UniqueToastContent visible={visible} setVisible={setVisible} />
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};
export default UniqueToast;
