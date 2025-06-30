import { Fragment, useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import { TopRightToastTitle } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";

const TopRightToast = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  const handleClick = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };
  return (
    <Fragment>
      <Button color="primary" onClick={handleClick}>
        {TopRightToastTitle}
      </Button>
      <div className="toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={visible} toggle={toggle}>
          <ToastHeader className="toast-img" toggle={toggle}>
            <Image className="rounded me-2" src={dynamicImage(`dashboard-8/profile.png`)} alt="profile" />
            {"Berlin Theme"}
            <small>{"5 min ago"}</small>
          </ToastHeader>
          <ToastBody className="toast-dark">{"Hello, I'm a web-designer."}</ToastBody>
        </Toast>
      </div>
    </Fragment>
  );
};
export default TopRightToast;
