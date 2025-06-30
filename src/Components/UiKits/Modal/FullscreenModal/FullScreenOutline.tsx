import { Fragment, useState } from "react";
import { ArrowRightCircle, ChevronsRight } from "react-feather";
import { Button } from "reactstrap";
import { FullscreenModal, UXDesigner, WebDesign, WedDesigner } from "../../../../Constants";
import { ScrollingModalData } from "../../../../Data/UiKits/Modal";
import CommonModal from "../Common/CommonModal";

const FullScreenOutline = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = {isOpen: modal,header: true,footer: true,class: "modal-fullscreen",toggler: toggle,title: "Full screen modal",button: "Save",bodyClass: "dark-modal",};
  return (
    <Fragment>
      <Button color="secondary-2x" outline={true} onClick={toggle}>{FullscreenModal}</Button>
      <CommonModal modalData={data}>
        <div className="large-modal-header">
          <ChevronsRight />
          <h6>{WebDesign} </h6>
        </div>
        <p className="modal-padding-space">{"We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI."}</p>
        <div className="modal-details">
          <div className="web-content">
            <h6>{WedDesigner}</h6>
            {ScrollingModalData &&
              ScrollingModalData.map((item, index) => (
                <Fragment key={index}>
                  {index === 4 && <h6>{UXDesigner}</h6>}
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <ArrowRightCircle className="svg-modal" />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </Fragment>
              ))}
          </div>
        </div>
      </CommonModal>
    </Fragment>
  );
};
export default FullScreenOutline;
