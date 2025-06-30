import { MoreVertical } from "react-feather";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { EducationAndEmploymentHeading } from "../../../../../Constants";
import { EducationData } from "../../../../../Data/Applications/SocialApp";

const EducationAndEmployment = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className="social-header pb-0">
          <h4>{EducationAndEmploymentHeading}<span className="pull-right"><MoreVertical /></span></h4>
        </CardHeader>
        <CardBody>
          {EducationData.map((data, index) => (
            <Row className="details-about" key={index}>
              <Col sm="6">
                <div className="your-details">
                  <span className="mb-2 d-block">{data.heading1}</span>
                  <p>{data.date1}</p>
                  <p>{data.paragraph1}</p>
                </div>
              </Col>
              <Col sm="6">
                <div className="your-details your-details-xs">
                  <span className="mb-2 d-block">{data.heading2}</span>
                  <p>{data.date2}</p>
                  <p>{data.paragraph2}</p>
                </div>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default EducationAndEmployment;
