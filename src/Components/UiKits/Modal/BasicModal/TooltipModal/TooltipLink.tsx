import { Fragment, useState } from "react";
import { Href, TooltipsModal } from "../../../../../Constants";
import { TooltipData } from "../../../../../Data/UiKits/Modal";
import { Tooltip } from "reactstrap";

const TooltipLink = () => {
  const [tooltips, setTooltips] = useState<{ [key: string]: boolean }>({});

  const toggleTooltip = (id: string) => {
    setTooltips((prevTooltips) => ({
      ...prevTooltips,
      [id]: !prevTooltips[id],
    }));
  };
  return (
    <Fragment>
      <h5>{TooltipsModal}</h5>
      <p className="mt-2">
        {TooltipData.map(({ id, content, text }) => (
          <Fragment key={id}>
            <a className="tooltip-test txt-primary" href={Href} id={id}>{content}</a>
            {text}
            <Tooltip autohide={true} isOpen={tooltips[id] || false} target={id} toggle={() => toggleTooltip(id)}>
              {"Tooltip"}
            </Tooltip>
          </Fragment>
        ))}
      </p>
    </Fragment>
  );
};
export default TooltipLink;
