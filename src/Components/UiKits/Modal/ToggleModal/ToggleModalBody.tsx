import { Fragment, useState } from "react";
import { Button } from "reactstrap";
import { Cancel, ConnectNewAccount, OpenFirstModal } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";
import CommonModal from "../Common/CommonModal";
import OtherModal from "./OtherModal";

const ToggleModalBody = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const toggle2 = () => setOpen(!open);
  const data = {isOpen: modal,center: true,toggler: toggle};
  return (
    <Fragment>
      <Button color="dark" onClick={toggle}>{OpenFirstModal}</Button>
      <CommonModal modalData={data}>
        <div className="modal-toggle-wrapper">
          <ul className="modal-img">
            <li><Image src={dynamicImage(`gif/whatapp.gif`)} alt="whatsapp" /></li>
            <li><Image src={dynamicImage(`gif/instagram.gif`)} alt="instagram" /></li>
            <li><Image src={dynamicImage(`gif/facebook.gif`)} alt="facebook" /></li>
          </ul>
          <h6>{"Remove your complete account from your phone or tablet to sign out of the Gmail app."}</h6>
          <Button color="dark" className="rounded-pill w-100 mt-4" onClick={toggle2}>{ConnectNewAccount}</Button>
          <Button color="transparent" className="rounded-pill w-100 dark-toggle-btn" onClick={toggle}>{Cancel}</Button>
        </div>
      </CommonModal>
      <OtherModal modal={open} toggle={toggle2} />
    </Fragment>
  );
};
export default ToggleModalBody;
