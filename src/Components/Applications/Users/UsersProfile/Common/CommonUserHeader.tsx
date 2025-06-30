import { Col, Row } from "reactstrap";
import { dynamicImage, Image } from "../../../../../Utils";

const CommonUserHeader = () => {
  return (
    <Row>
      <Col sm="8">
        <div className="d-flex">
          <Image className="img-thumbnail img-50 rounded-circle me-3" src={dynamicImage(`user/7.jpg`)} alt="Generic placeholder img" />
          <div className="flex-grow-1 align-self-center">
            <h5 className="mt-0 user-name">JOHAN DIO</h5>
          </div>
        </div>
      </Col>
      <Col sm="4" className="align-self-center">
        <div className="float-sm-end">
          <small>10 Hours ago</small>
        </div>
      </Col>
    </Row>
  );
};
export default CommonUserHeader;
