import { Fragment, useState } from "react";
import { Button, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { PopoverOnLeft, PopoverOffsetDash50 } from "../../../../Constants";

const OffsetLeft = () => {
  const [popover, setPopover] = useState(false);
  const toggle = () => setPopover(!popover);
  return (
    <Fragment>
      <Button color="success" className="example-popover" id="offset" onClick={toggle}>
        {PopoverOffsetDash50}
      </Button>
      <Popover placement="left" isOpen={popover} target="offset" toggle={toggle} offset={[-50, 0]}>
        <PopoverHeader>{PopoverOnLeft}</PopoverHeader>
        <PopoverBody>{"Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself."}</PopoverBody>
      </Popover>
    </Fragment>
  );
};
export default OffsetLeft;
