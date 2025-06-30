import { Col, Media } from "reactstrap";
import { CommonTourHeaderProp } from "../../../../Types/BonusUi";
import { dynamicImage, Image } from "../../../../Utils";
import { WilliamJennings } from "../../../../Constants";

const CommonTourHeader:React.FC<CommonTourHeaderProp> = ({ date, time }) => {
  return (
    <Col sm="8">
      <Media className="d-flex">
        <Image className="img-thumbnail rounded-circle me-3" src={dynamicImage(`user/7.jpg`)} alt="Generic placeholder image" />
        <Media body className="align-self-center">
          <h5 className="mt-0 user-name">{WilliamJennings}</h5>
          <div className="tour-wrapper">
            <span>{date}</span>
            <i className="tour-dot fa-solid fa-circle"></i>
            <span className="text-danger">{time}</span>
          </div>
        </Media>
      </Media>
    </Col>
  );
};

export default CommonTourHeader;
