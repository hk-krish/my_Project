import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { ToastPlacementContentProp } from "../../../../Types/BonusUi";
import { dynamicImage, Image } from "../../../../Utils";

const ToastPlacementContent: React.FC<ToastPlacementContentProp> = ({ selectedPosition }) => {
  return (
    <div className="bg-light position-relative bd-example-toasts">
      <div className={`toast-container p-3 position-absolute ${selectedPosition}`} id="toastPlacement">
        <Toast fade>
          <ToastHeader className="toast-img">
            <Image className="rounded me-2" src={dynamicImage(`dashboard-8/profile.png`)} alt="profile" />
            {"Berlin Theme"}
            <small>{"25 min ago"}</small>
          </ToastHeader>
          <ToastBody className="toast-dark txt-dark">
            <p className="toast-content">
              <em className="txt-danger">{"Attackers"}</em>
              {" on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations."}
            </p>
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};
export default ToastPlacementContent;
