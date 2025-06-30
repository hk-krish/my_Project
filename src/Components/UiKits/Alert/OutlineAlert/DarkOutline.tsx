import { useState } from "react";
import { ThumbsUp } from "react-feather";
import { Alert } from "reactstrap";

const DarkOutline = () => {
  const [active, setActive] = useState(true);
  return (
    <Alert color="default" isOpen={active} className={`txt-success border-success outline-2x alert-icons`} toggle={() => setActive(false)}>
      <ThumbsUp />
      <p>
        <b> {"Well done! "}</b>
        {"You successfully read this important message."}
      </p>
    </Alert>
  );
};
export default DarkOutline;
