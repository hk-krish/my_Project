import { Fragment, useState } from "react";
import { Button, Tooltip } from "reactstrap";
import { PopoverModal, TooltipButtonText, TooltipsPopovers } from "../../../../../Constants";
import CommonModal from "../../Common/CommonModal";
import TooltipLink from "./TooltipLink";

const TooltipModal = () => {
  const [state, setState] = useState({ modalOpen: false, tooltipOpen: false });
  const handleModalToggle = () => {
    setState((prevState) => ({
      ...prevState,
      modalOpen: !prevState.modalOpen,
    }));
  };
  const handleTooltipToggle = () => {
    setState((prevState) => ({
      ...prevState,
      tooltipOpen: !prevState.tooltipOpen,
    }));
  };
  const data = {isOpen: state.modalOpen,header: true,footer: true,toggler: handleModalToggle,center: true,title: "Tooltip and Popover Modal"};
  return (
    <Fragment>
      <Button color="info" onClick={handleModalToggle}>{TooltipsPopovers}</Button>
      <CommonModal modalData={data}>
        <h5>{PopoverModal}</h5>
        <p className="mt-2">{"This "}
          <Button className="popover-test" color="secondary" id="TooltipExample">{"button"}</Button>
          {" triggers a popover on click."}
          <Tooltip autohide={true} isOpen={state.tooltipOpen} target="TooltipExample" toggle={handleTooltipToggle}>{TooltipButtonText}</Tooltip>
        </p>
        <hr />
        <TooltipLink />
      </CommonModal>
    </Fragment>
  );
};
export default TooltipModal;
