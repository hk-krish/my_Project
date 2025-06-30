import { Fragment, useState } from "react";
import { ArrowRightCircle, ChevronsRight } from "react-feather";
import { Button } from "reactstrap";
import { UXDesigner, WebDesign, WedDesigner } from "../../../../Constants";
import { BelowSmData } from "../../../../Data/UiKits/Modal";
import CommonModal from "../Common/CommonModal";
import { CommonBelowModalType } from "../../../../Types/UiKitsType";

const CommonBelowModal: React.FC<CommonBelowModalType> = ({ title, modalClass, color }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = { isOpen: modal, header: true, footer: true, toggler: toggle, title: title, class: modalClass, bodyClass: "dark-modal" };
  return (
    <Fragment>
      <Button color={color} outline={true} onClick={toggle}>
        {title}
      </Button>
      <CommonModal modalData={data}>
        <div className="large-modal-header">
          <ChevronsRight />
          <h6>{WebDesign}</h6>
        </div>
        <p className="modal-padding-space">{"We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI."}</p>
        <div className="modal-details">
          <div className="web-content">
            <h6>{WedDesigner}</h6>
            {BelowSmData &&
              BelowSmData.map((item, index) => (
                <Fragment key={index}>
                  <div className={`d-flex ${item.class}`}>
                    <div className="flex-shrink-0">
                      <ArrowRightCircle className="svg-modal" />
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <p className="m-0">{item.text}</p>
                    </div>
                  </div>
                  {index === 1 && <h6>{UXDesigner}</h6>}
                </Fragment>
              ))}
          </div>
        </div>
      </CommonModal>
    </Fragment>
  );
};

export default CommonBelowModal;
