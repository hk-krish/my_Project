import { Fragment, useState } from "react";
import { ChevronsRight } from "react-feather";
import { ExtraLargeModal } from "../../../../Constants";
import { FullScreenModalData } from "../../../../Data/UiKits/Modal";
import CommonModal from "../Common/CommonModal";
import { Button } from "reactstrap";

const ExtraLarge = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = {isOpen: modal,header: true,toggler: toggle,title: "Extra large modal",size: "xl",bodyClass: "dark-modal"};
  return (
    <Fragment>
      <Button color="info" onClick={toggle}>{ExtraLargeModal}</Button>
      <CommonModal modalData={data}>
        {FullScreenModalData &&
          FullScreenModalData.map((item, index) => (
            <Fragment key={index}>
              <div className="large-modal-header">
                <ChevronsRight />
                <h6>{item.title}</h6>
              </div>
              <p className="modal-padding-space">{item.text}</p>
            </Fragment>
          ))}
      </CommonModal>
    </Fragment>
  );
};
export default ExtraLarge;
