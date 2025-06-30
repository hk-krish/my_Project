import { Fragment, useState } from "react";
import { ChevronsRight, CornerUpRight } from "react-feather";
import { Button } from "reactstrap";
import { LargeModalButton, StartYourGoals } from "../../../../Constants";
import { LargeModalData } from "../../../../Data/UiKits/Modal";
import CommonModal from "../Common/CommonModal";

const LargeModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = {isOpen: modal,header: true,toggler: toggle,title: "Large modal",size: "lg",bodyClass: "dark-modal"};
  return (
    <Fragment>
      <Button color="success" onClick={toggle}>{LargeModalButton}</Button>
      <CommonModal modalData={data}>
        <div className="large-modal-header">
          <ChevronsRight />
          <h6>{StartYourGoals}</h6>
        </div>
        <Fragment>
          {LargeModalData &&
            LargeModalData.map((item, index) => (
              <Fragment key={index}>
                {index <= 2 && <p className="modal-padding-space mb-0">{item.text}</p>}
                {index > 2 && (
                  <div className="large-modal-body">
                    <CornerUpRight />
                    <p className="ps-1">{item.text}</p>
                  </div>
                )}
              </Fragment>
            ))}
        </Fragment>
      </CommonModal>
    </Fragment>
  );
};
export default LargeModal;
