import { useState } from "react";
import { Button, Col } from "reactstrap";
import { ClickOut } from "../../../../../Constants";
import CommonThemeModalTitle from "../Common/CommonThemeModalTitle";
import CustomModal3Body from "./CustomModal3Body";
import { dynamicImage, Image } from "../../../../../Utils";

const CustomModal3 = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Col xl="4" md="6" className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="aria-demo-img">
          <CommonThemeModalTitle heading="Modal 3 -" subHeading="Balance Modal" text="Example of aria dashboard balance card." />
          <div className="overflow-hidden balance-modal">
            <Image className="img-fluid" src={dynamicImage(`alert/balance.png`)} alt="balance" />
            <Button color="primary" className="mx-auto mt-3" onClick={toggle}>{ClickOut}</Button>
          </div>
          <CustomModal3Body modal={modal} toggle={toggle} />
        </div>
      </div>
    </Col>
  );
};
export default CustomModal3