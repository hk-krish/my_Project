import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Col } from "reactstrap";
import { CopyHighlightedText, CopyPortionParagraphTitle } from "../../../../../Constants";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";

const CopyPortionFromParagraph = () => {
  const [highlightTextValue, setHighlightTextValue] = useState("Web design is the process of creating websites");
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(highlightTextValue);
      setHighlightTextValue(highlightTextValue);

      setTimeout(() => {
        setHighlightTextValue(highlightTextValue);
      }, 2000);
    } catch (err) {
      toast.error("Failed to copy text: " + err);
    }
  };
  return (
    <Col sm="12" md="6">
      <Card className="height-equal">
        <CommonCardHeader title={CopyPortionParagraphTitle} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="f-16">{"Copy portion from paragraph"}</p>
            <h6 className="border rounded f-w-300">
              <CardBody>
                <span className="bg-primary text-white p-1">{"Web design is the process of creating websites "}</span>
                {"that are visible online. Take a website design course to learn how to  create an appealing and responsive website. In the discipline of web design, there are degree, diploma, postgraduate degree, and certificate programmes. A web designer is responsible for a website's look, feel, and occasionally even content."}
              </CardBody>
            </h6>
            <div className="mt-3 text-end">
              <Button className="btn-clipboard" color="secondary" onClick={handleCopy}>
                <i className="fa fa-copy"></i> {CopyHighlightedText}
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CopyPortionFromParagraph;
