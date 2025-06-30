import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { Href, LatestUpdatesTitle } from "../../../../../Constants";
import { LatestUpdatesData } from "../../../../../Data/Miscellaneous/FAQ";

const LatestUpdates = () => {
  return (
    <Col lg="12">
      <Card>
        <CardHeader className="faq-header pb-0">
          <h4 className="d-inline-block">{LatestUpdatesTitle}</h4>
          <span className="pull-right d-inline-block">{"See All"}</span>
        </CardHeader>
        <CardBody className="faq-body">
          {LatestUpdatesData.map((data) => (
            <div className="d-flex updates-faq-main" key={data.id}>
              <div className="updates-faq">{data.icon}</div>
              <div className="flex-grow-1 updates-bottom-time">
                <p>{data.name} <a href={Href}>{data.anchor}</a> {data.title}</p>
                <p>{data.time}</p>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default LatestUpdates;
