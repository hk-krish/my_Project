import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Href } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";
import { Fragment } from "react/jsx-runtime";
import { PainterTourParagraph } from "../../../../Data/BonusUi/Tour";

const ThirdStyleAboutSection = () => {
  return (
    <Fragment>
      <p className="block-ellipsis">{PainterTourParagraph}</p>
      <Row className="g-3 mt-4 pictures" id="aniimated-thumbnials-2">
        <Col sm="6">
          <Link to={Href}>
            <div className="tour-blog">
              <Image className="img-fluid rounded" src={dynamicImage(`other-images/mountain.jpg`)} alt="mountain" />
            </div>
          </Link>
        </Col>
        <Col sm="6">
          <Link to={Href}>
            <div className="tour-blog">
              <Image className="img-fluid rounded" src={dynamicImage(`other-images/sea.jpg`)} alt="sea" />
            </div>
          </Link>
        </Col>
      </Row>
    </Fragment>
  );
};
export default ThirdStyleAboutSection;