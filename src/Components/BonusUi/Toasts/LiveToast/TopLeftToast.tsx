import { Fragment, useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import { TopLeftToastTitle } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";

const TopLeftToast = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  const handleClick = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };
  return (
    <Fragment>
      <Button color="warning" onClick={handleClick}>
        {TopLeftToastTitle}
      </Button>
      <div className="toast-container position-fixed start-0 top-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={visible} toggle={toggle}>
          <ToastHeader className="toast-img" toggle={toggle}>
            <Image className="rounded me-2" src={dynamicImage(`dashboard-8/profile.png`)} alt="profile" />
            {"Berlin Theme"}
            <small>{"10 min ago"}</small>
          </ToastHeader>
          <ToastBody className="toast-dark">
            <strong className="txt-success">{"Well done!"}</strong> {"You successfully read this important message."}
          </ToastBody>
        </Toast>
      </div>
    </Fragment>
  );
};
export default TopLeftToast;
