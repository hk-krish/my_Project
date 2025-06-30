import React, { useState } from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { CommonToastProps } from "../../../../Types/BonusUi";

const CommonToast: React.FC<CommonToastProps> = ({ icon, smallClass, strongText, smallText, bodyText }) => {
  const [open, setOpen] = useState(true);
  return (
    <Toast isOpen={open}>
      <ToastHeader toggle={() => setOpen(false)} icon={icon}>
        {strongText}
        <small className={smallClass}>{smallText}</small>
      </ToastHeader>
      <ToastBody className="toast-dark">{bodyText}</ToastBody>
    </Toast>
  );
};
export default CommonToast;
