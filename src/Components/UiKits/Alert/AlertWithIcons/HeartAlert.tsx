import { useState } from "react";
import { Alert, Button } from "reactstrap";

const HeartAlert = () => {
  const [active, setActive] = useState(true);
  return (
    <Alert color="default" isOpen={active} className={`border-danger p-0 mb-0 custom-alert-default`}>
      <div className="alert-arrow bg-danger">
        <i className="icon-heart" />
      </div>
      <p>
        {"Oh snap! Change a few things up "}
        <strong className="txt-dark">{" Notification check"}</strong>
      </p>
      <Button className="p-0 border-0 me-2 ms-auto" onClick={() => setActive(false)}>
        <span className="bg-danger text-white px-3 py-1" aria-hidden="true">
          {"Alert"}
        </span>
      </Button>
    </Alert>
  );
};
export default HeartAlert;
