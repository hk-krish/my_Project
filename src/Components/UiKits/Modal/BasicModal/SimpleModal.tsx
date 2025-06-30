import { Fragment, useState } from "react";
import { ArrowRight } from "react-feather";
import { Button } from "reactstrap";
import { ExploreMore, Simple, SimpleText, Upto } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";
import CommonModal from "../Common/CommonModal";

const SimpleModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = {isOpen: modal,toggler: toggle};
  return (
    <Fragment>
      <Button color="secondary" onClick={toggle}>{Simple}</Button>
      <CommonModal modalData={data}>
        <div className="modal-toggle-wrapper">
          <h5>{Upto}
            <strong className="txt-danger">{"85% OFF"}</strong>
            {SimpleText}
          </h5>
          <div className="modal-img">
            <Image src={dynamicImage(`gif/online-shopping.gif`)} alt="online-shopping" />
          </div>
          <p className="text-sm-center">{"Our difficulty in finding regular clothes that was of great quality, comfortable, and didn't impact the environment given way to Creatures of Habit."}</p>
          <Button color="primary" className="d-flex align-items-center gap-2 text-light ms-auto" onClick={toggle}>
            {ExploreMore} <ArrowRight />
          </Button>
        </div>
      </CommonModal>
    </Fragment>
  );
};
export default SimpleModal;
