import { useState } from "react";
import { Button, Col } from "reactstrap";
import { ClickOut } from "../../../../../Constants";
import CommonThemeModalTitle from "../Common/CommonThemeModalTitle";
import CustomModal1Body from "./CustomModal1Body";
import { dynamicImage, Image } from "../../../../../Utils";

const CustomModal1 = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Col xl="4" md="6" className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="aria-demo-img">
          <CommonThemeModalTitle heading="Modal 1 -" subHeading="Profile Modal" text="Example of aria dashboard profile card." />
          <div className="overflow-hidden">
            <Image className="img-fluid" src={dynamicImage(`alert/social.png`)} alt="social" />
            <Button color="primary" className="mx-auto mt-3" onClick={toggle}>{ClickOut}</Button>
          </div>
          <CustomModal1Body modal={modal} toggle={toggle} />
        </div>
      </div>
    </Col>
  );
};
export default CustomModal1