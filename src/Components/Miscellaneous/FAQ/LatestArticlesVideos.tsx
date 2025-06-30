import { Card, CardBody, Col, Row } from "reactstrap";
import { LatestArticlesVideosTitle } from "../../../Constants";
import { LatestArticlesVideosProps } from "../../../Types/MiscellaneousType";

const LatestArticlesVideos: React.FC<LatestArticlesVideosProps> = ({ titleClass, rowClass, divClass, data }) => {
  return (
    <Col lg="12" className="faq-articles">
      <div className="header-faq">
        <h4 className={`mb-0 ${titleClass ? titleClass : ""}`}>{LatestArticlesVideosTitle}</h4>
      </div>
      <Row className={rowClass}>
        {data.map((data) => (
          <Col xl="4" className={data.id !== 3 ? "col-md-6" : ""} key={data.id}>
            <Row>
              {data.child.map((item) => (
                <Col key={item.id} className={item.colClass}>
                  <Card>
                    <CardBody>
                      <div className={`d-flex ${divClass ? divClass : ""}`}>
                        {item.icon}
                        <div className="flex-grow-1">
                          <h6 className="pb-2 f-w-600">{item.title}</h6>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
export default LatestArticlesVideos;
