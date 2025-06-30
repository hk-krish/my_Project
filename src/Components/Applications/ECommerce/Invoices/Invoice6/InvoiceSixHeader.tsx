import { Col, Media, Row } from "reactstrap";
import { dynamicImage, Image } from "../../../../../Utils";
import { Invoice } from "../../../../../Constants";

const InvoiceSixHeader = () => {
  return (
    <div>
      <Row>
        <Col sm="6">
          <Media className="d-flex">
            <div className="media-left">
              <Image className="img-fluid for-light" src={dynamicImage(`logo/logo.png`)} alt="looginpage" />
              <Image className="img-fluid for-dark" src={dynamicImage(`logo/logo_dark.png`)} alt="looginpage" />
            </div>
            <Media body className="text-right m-l-20 text-start ">
              <h4 className="media-heading">zono</h4>
              <p>hello@zono.in<br /><span>289-335-6503</span></p>
            </Media>
          </Media>
        </Col>
        <Col sm="6">
          <div className="text-md-end text-xs-center">
            <h3>{Invoice} #<span className="counter">1069</span></h3>
            <p>Issued: May<span> 27, 2024</span><br /> Payment Due: June <span>27, 2024</span></p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InvoiceSixHeader;
