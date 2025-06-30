import { useState } from "react";
import { Clock } from "react-feather";
import { Alert } from "reactstrap";

const LightOutline = () => {
  const [active, setActive] = useState(true);
  return (
    <Alert color="default" isOpen={active} className={`txt-primary border-primary`} toggle={() => setActive(false)}>
      <Clock />
      <p>
        {"One of "}
        <strong> {"YouTube's"} </strong>
        {"most crucial ranking factors is Watch Time."}
      </p>
    </Alert>
  );
};
export default LightOutline;
