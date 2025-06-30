import { Button, Card, CardBody, Col, ListInlineItem, Row } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { HorizontalTimelineTitle, ReadMore } from "../../../Constants";
import { HorizontalTimelineData, HorizontalTimelineSubTitle } from "../../../Data/BonusUi/Timeline";

const HorizontalTimeline = () => {
  return (
    <Col xxl="8" xl="7" className="box-col-12">
      <Card>
        <CommonCardHeader title={HorizontalTimelineTitle} span={HorizontalTimelineSubTitle} />
        <CardBody>
          {HorizontalTimelineData.map((data) => (
            <Row className={`list-inline events timeline-list ${data.mainClass}`} key={data.id}>
              {data.child.map((item) => (
                <Col xxl="4" className={item.colClass} key={item.id}>
                  <div>
                    {item.verticalLine2 && <div className={item.verticalLine2}></div>}
                    <ListInlineItem className="event-list">
                      <div className="px-4">
                        <div className={`event-date alert-light-${item.color} txt-${item.color}`}>{item.date}</div>
                        <h5>{item.header}</h5>
                        <p className="f-light text-truncate">{item.paragraph}</p>
                        <div className="read-more-btn">
                          <Button color="primary" className="px-3">{ReadMore}</Button>
                        </div>
                      </div>
                    </ListInlineItem>
                    {item.verticalLine1 && <div className={item.verticalLine1}></div>}
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default HorizontalTimeline;
