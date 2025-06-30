import { useState } from "react";
import { Button, Col } from "reactstrap";
import { ClickOut, ThemeLogin } from "../../../../Constants";
import CommonModal from "../Common/CommonModal";
import StaticModalForm from "../Common/StaticModalForm";
import CommonThemeModalTitle from "./Common/CommonThemeModalTitle";
import { dynamicImage, Image } from "../../../../Utils";

const CustomModal2 = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = {isOpen: modal,center: true,toggler: toggle,bodyClass: "dark-sign-up social-profile text-start"};
  return (
    <Col xl="4" md="6" className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="aria-demo-img">
          <CommonThemeModalTitle heading="Modal 2 -" subHeading="Result Modal" text="Example of aria login form." />
          <div className="overflow-hidden">
            <Image className="img-fluid" src={dynamicImage(`alert/learning.png`)} alt="learning" />
            <Button color="primary" className="mx-auto mt-3" onClick={toggle}>{ClickOut}</Button>
          </div>
          <CommonModal modalData={data}>
            <div className="modal-toggle-wrapper">
              <h5>{ThemeLogin}</h5>
              <p>{"Fill in your information below to continue."}</p>
              <StaticModalForm toggle={toggle} />
            </div>
          </CommonModal>
        </div>
      </div>
    </Col>
  );
};
export default CustomModal2;
