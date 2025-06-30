import { Col, Row } from "reactstrap";
import { Congratulations } from "../../../../../Constants";
import { dynamicImage, Image } from "../../../../../Utils";

const FinishForm = () => {
  return (
    <div className="stepper-four needs-validation">
      <Row className="g-3">
        <Col xs="12" className="m-0">
          <div className="successful-form">
            <Image className="img-fluid" src={dynamicImage(`gif/successful.gif`)} alt="successful" />
            <h3>{Congratulations}</h3>
            <p>{"Well done! You have successfully completed. "}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default FinishForm;
