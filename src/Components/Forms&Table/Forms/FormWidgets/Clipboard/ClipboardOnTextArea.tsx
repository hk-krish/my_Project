import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Col, Input } from "reactstrap";
import { ClipboardOnTextAreaTitle, Copy, Cut } from "../../../../../Constants";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";

const ClipboardOnTextArea = () => {
  const clipboardOnTextAreaText: string = "A web designer must always enhance their work since creating websites is a creative effort. Therefore, a web designer must be more imaginative to produce exceptional results. Blogs about web design assist web designers in learning about new technologies, offer lessons, news, direction for a freebie, and much more. These blogs allow web designers to stay creative and improve their abilities. Therefore, advice from web design blogs is required to improve your business.";
  const [clipBoardOnTextAreaValue, setClipBoardOnTextAreaValue] = useState(clipboardOnTextAreaText);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(clipBoardOnTextAreaValue);
      setClipBoardOnTextAreaValue(clipBoardOnTextAreaValue);
    } catch (err) {
      toast.error("Failed to copy text: " + err);
    }
  };

  const handleCut = async () => {
    try {
      await navigator.clipboard.writeText(clipBoardOnTextAreaValue);
      setClipBoardOnTextAreaValue("");
    } catch (err) {
      toast.error("Failed to cut text: " + err);
    }
  };
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={ClipboardOnTextAreaTitle} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="f-16">{"Cut/copy from textarea"}</p>
            <Input type="textarea" onChange={(event) => setClipBoardOnTextAreaValue(event.target.value)} className="f-14" rows={1} value={clipBoardOnTextAreaValue} />
            <div className="mt-3 text-end">
              <Button className="btn-clipboard me-2" color="warning" onClick={handleCopy}>
                <i className="fa fa-copy"></i> {Copy}
              </Button>

              <Button className="btn-clipboard-cut" color="success" onClick={handleCut}>
                <i className="fa fa-cut"></i> {Cut}
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ClipboardOnTextArea;
