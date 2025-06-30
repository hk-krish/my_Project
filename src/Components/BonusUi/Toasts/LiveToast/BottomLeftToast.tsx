import { Fragment, useState } from "react";
import { Button, Toast, ToastHeader } from "reactstrap";
import { BottomLeftToastTitle } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";
import UniqueToastContent from "../Common/UniqueToastContent";

const BottomLeftToast = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  const handleClick = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };
  return (
    <Fragment>
      <Button color="success" onClick={handleClick}>
        {BottomLeftToastTitle}
      </Button>
      <div className="toast-container position-fixed start-0 bottom-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={visible}>
          <ToastHeader className="toast-img" toggle={toggle}>
            <Image className="rounded me-2" src={dynamicImage(`dashboard-8/profile.png`)} alt="profile" />
            <strong className="me-auto">{"Berlin Theme"}</strong>
          </ToastHeader>
          <UniqueToastContent visible={visible} setVisible={setVisible} />
        </Toast>
      </div>
    </Fragment>
  );
};
export default BottomLeftToast;
