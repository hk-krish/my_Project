import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Col, Input } from "reactstrap";
import { ClipBoardOnTextInputTitle, Copy, Cut } from "../../../../../Constants";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";

const ClipboardOnTextInput = () => {
  const [inputValue, setInputValue] = useState("");
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inputValue);
      setInputValue(inputValue);
    } catch (err) {
      toast.error("Failed to copy text: " + err);
    }
  };

  const handleCut = async () => {
    try {
      await navigator.clipboard.writeText(inputValue);
      setInputValue("");
    } catch (err) {
      toast.error("Failed to cut text: " + err);
    }
  };
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={ClipBoardOnTextInputTitle} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="f-16">{"Cut/copy from text input"}</p>
            <Input type="text" placeholder="type some text to copy / cut" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <div className="mt-3 text-end">
              <Button className="btn-clipboard me-2" color="primary" onClick={handleCopy}>
                <i className="fa fa-copy"></i> {Copy}
              </Button>
              <Button className="btn-clipboard-cut" color="secondary" onClick={handleCut}>
                <i className="fa fa-cut"></i> {Cut}
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ClipboardOnTextInput;
