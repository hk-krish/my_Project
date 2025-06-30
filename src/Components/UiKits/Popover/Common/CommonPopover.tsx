import React, { Fragment, useState } from "react";
import { Button, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { CommonPopoverProp } from "../../../../Types/UiKitsType";

const CommonPopover: React.FC<CommonPopoverProp> = ({ data }) => {
  const [popover, setPopover] = useState(false);
  return (
    <Fragment>
      <Button color={data.btnColor} size={data.size} className="example-popover" id={"Popover-" + data.id}>
        {data.btnText}
      </Button>
      <Popover placement={data.placement} isOpen={popover} target={"Popover-" + data.id} toggle={() => setPopover(!popover)} trigger={data.trigger}>
        <PopoverHeader>{data.popoverHeader}</PopoverHeader>
        <PopoverBody>{data.popoverBody}</PopoverBody>
      </Popover>
    </Fragment>
  );
};
export default CommonPopover;
