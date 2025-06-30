import { Fragment, useState } from "react";
import { ArrowRightCircle } from "react-feather";
import { Button } from "reactstrap";
import { ScrollingContent, UXDesigner, WedDesigner } from "../../../../Constants";
import { ScrollingModalData } from "../../../../Data/UiKits/Modal";
import CommonModal from "../Common/CommonModal";

const ScrollingModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = {isOpen: modal,header: true,footer: true,toggler: toggle,title: "Scrolling Modal"};
  return (
    <Fragment>
      <Button color="success" onClick={toggle}>{ScrollingContent}</Button>
      <CommonModal modalData={data}>
        <Fragment>
          <h6>{WedDesigner}</h6>
          {ScrollingModalData &&
            ScrollingModalData.map((item, index) => (
              <Fragment key={index}>
                {index === 4 && <h6>{UXDesigner}</h6>}
                <div className={`d-flex ${item.class}`}>
                  <div className="flex-shrink-0">
                    <ArrowRightCircle className="svg-modal" />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <p className={index === 3 ? "pb-4" : ""}>{item.text}</p>
                  </div>
                </div>
              </Fragment>
            ))}
        </Fragment>
      </CommonModal>
    </Fragment>
  );
};
export default ScrollingModal;
