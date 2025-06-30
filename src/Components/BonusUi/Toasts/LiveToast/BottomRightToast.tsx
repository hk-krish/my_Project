import { Fragment, useState } from "react";
import { Button, CloseButton, Toast, ToastBody } from "reactstrap";
import { BottomRightToastTitle } from "../../../../Constants";

const BottomRightToast = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  const handleClick = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };
  return (
    <Fragment>
      <Button color="secondary" onClick={handleClick}>
        {BottomRightToastTitle}
      </Button>
      <div className="toast-container position-fixed bottom-0 end-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={visible}>
          <div className="d-flex justify-content-between alert-secondary">
            <ToastBody>{"Your time over after 5 minute."}</ToastBody>
            <CloseButton variant="white" className="me-2 m-auto" onClick={toggle} />
          </div>
        </Toast>
      </div>
    </Fragment>
  );
};
export default BottomRightToast;
