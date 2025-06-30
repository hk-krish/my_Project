import { Col, Row } from "reactstrap";
import { CommonProductSlideProp } from "../../../../../../../Types/EcommerceType";
import { dynamicImage, Image } from "../../../../../../../Utils";
import { Rating } from "react-simple-star-rating";

const CommonProductSlide:React.FC<CommonProductSlideProp> = ({ data }) => {
  
  return (
    <Row className={`product-box align-items-center my-3 ${data.rowClass ? data.rowClass : ""}`}>
      <Col md="5" className="product-img">
        <Image className="img-fluid img-100 rounded-3" src={dynamicImage(`ecommerce/${data.image}`)} alt="" />
      </Col>
      <Col md="7" className="product-details text-start p-0 py-3">
        <span>
          <Rating fillColor="#ffa800" initialValue={Math.random() * 5} size={17} />
        </span>
        <p className="mb-0">{data.title}</p>
        <div className="product-price">{data.text}</div>
      </Col>
    </Row>
  );
};

export default CommonProductSlide;
