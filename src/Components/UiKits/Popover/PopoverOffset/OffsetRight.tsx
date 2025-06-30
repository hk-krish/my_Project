import { Fragment, useState } from "react";
import { Button, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { PopoverOffset50, PopoverTitle } from "../../../../Constants";

const OffsetRight = () => {
  const [popover, setPopover] = useState(false);
  const toggle = () => setPopover(!popover);
  return (
    <Fragment>
      <Button color="secondary" id="PopoverOffset" onClick={toggle}>
        {PopoverOffset50}
      </Button>
      <Popover placement="right" isOpen={popover} target="PopoverOffset" toggle={toggle} offset={[50, 0]}>
        <PopoverHeader>{PopoverTitle}</PopoverHeader>
        <PopoverBody>{"And here's some amazing content. It's very engaging. Right?"}</PopoverBody>
      </Popover>
    </Fragment>
  );
};
export default OffsetRight;
