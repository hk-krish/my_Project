import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { dynamicImage, Image } from "../../../../Utils";
import { routes } from "../../../../Routers/routes";
import { GoPremium } from "../../../../Constants";

const PremiumCoursesCard = () => {
  return (
    <Col xl="6" className="box-col-7 proorder-md-1">
      <Card>
        <CardBody className="premium-card">
          <Row className="premium-courses-card">
            <Col md="5" className="premium-course">
              <h1 className="f-w-700">{"Get Thousands Premium Courses."}</h1>
              <span className="f-light f-w-400 f-14">{"Upgrade to watch, play, learn, make and discover. "}</span>
              <Button tag="a" color="primary" className="btn-square f-w-700" href={routes.ECommerce.Pricing}>{GoPremium}</Button>
            </Col>
            <Col md="7" className="premium-course-img">
              <div className="premium-message">
                <Image className="img-fluid" src={dynamicImage("dashboard/massage.gif")} alt="massage" />
              </div>
              <div className="premium-books">
                <Image className="img-fluid" src={dynamicImage("dashboard/books.gif")} alt="books" />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PremiumCoursesCard;
