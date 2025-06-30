import { useState } from "react";
import { Card, CardBody, CloseButton, Col, Toast, ToastBody } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { ColorsSchemesTitle } from "../../../Constants";
import { ColorsSchemeSubTitle } from "../../../Data/BonusUi/Toasts";

const ColorsScheme = () => {
  const [open, setOpen] = useState(true);
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={ColorsSchemesTitle} span={ColorsSchemeSubTitle} />
        <CardBody className="toast-rtl">
          <Toast fade className="default-show-toast align-items-center text-light border-0 bg-warning" isOpen={open}>
            <div className="d-flex justify-content-between">
              <ToastBody>{"Your time over after 5 minute."}</ToastBody>
              <CloseButton variant="white" className="me-2 m-auto" onClick={() => setOpen(!open)} />
            </div>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ColorsScheme;
