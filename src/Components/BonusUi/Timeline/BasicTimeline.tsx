import { Card, CardBody, Col } from "reactstrap";
import { BasicTimelineTitle } from "../../../Constants";
import { BasicTimeLineData, BasicTimelineSubTitle } from "../../../Data/BonusUi/Timeline";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const BasicTimeline = () => {
  return (
    <Col xl="6" className="box-col-6 notification main-timeline">
      <Card>
        <CommonCardHeader title={BasicTimelineTitle} span={BasicTimelineSubTitle} />
        <CardBody className="dark-timeline basic-timeline">
          <ul>
            {BasicTimeLineData &&
              BasicTimeLineData.map((item, index) => (
                <li className="d-flex" key={index}>
                  <div className={`timeline-dot-${item.class}`} />
                  <div className="w-100 ms-3">
                    <p className="d-flex justify-content-between mb-2">
                      <span className="date-content light-background">{item.date}</span>
                      <span>{item.time}</span>
                    </p>
                    <h6>{item.title}<span className="dot-notification"/></h6>
                    <p className="f-light">{item.text}</p>
                  </div>
                </li>
              ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BasicTimeline;
