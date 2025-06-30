import { Rating } from "react-simple-star-rating";
import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import { FeaturedTutorialsTitle, Primary } from "../../../Constants";
import { FeaturedTutorialsData } from "../../../Data/Miscellaneous/FAQ";
import { dynamicImage, Image } from "../../../Utils";

const FeaturedTutorials = () => {
  return (
    <Col lg="12">
      <div className="header-faq">
        <h4 className="mb-0 f-w-600">{FeaturedTutorialsTitle}</h4>
      </div>
      <Row>
        {FeaturedTutorialsData.map((data) => (
          <Col xxl="3" md="6" className="box-col-6" key={data.id}>
            <Card className="features-faq product-box">
              <div className="faq-image product-img">
                <Image className="img-fluid" src={dynamicImage(`faq/${data.image}`)} alt="featured image" />
                <div className="product-hover">
                  <ul>
                    <li><i className="icon-link"></i></li>
                    <li><i className="icon-import"></i></li>
                  </ul>
                </div>
              </div>
              <CardBody>
                <h6>{data.title}</h6>
                <p>{data.description}</p>
              </CardBody>
              <CardFooter className="w-100">
                <span>{data.date}</span>
                <span className="pull-right"><Rating fillColor={Primary} initialValue={Math.random() * 5} size={16} /></span>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
export default FeaturedTutorials;
