import { Card, CardBody, Col } from "reactstrap";
import { VariationTimelineTitle } from "../../../Constants";
import { VariationTimeLineDataList, VariationTimelineSubTitle } from "../../../Data/BonusUi/Timeline";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const VariationTimeline = () => {
  return (
    <Col xxl="4" xl="5" className="notification box-col-12">
      <Card>
        <CommonCardHeader title={VariationTimelineTitle} span={VariationTimelineSubTitle} />
        <CardBody className="dark-timeline">
          <ul>
            {VariationTimeLineDataList.map((data, index) => (
              <li className={`d-flex ${data.className}`} key={index}>
                <div className={`activity-dot-${data.color}`}></div>
                <div className="w-100 ms-3">
                  <p className="d-flex justify-content-between mb-2">
                    <span className="date-content light-background txt-dark">{data.date}</span>
                    <span>{data.time}</span>
                  </p>
                  <h6>{data.title}<span className="dot-notification"></span></h6>
                  {data.subTitleClass ? <span className={data.subTitleClass ? data.subTitleClass : ""}>{data.subTitle}</span> : <p>{data.subTitle}</p>}
                  {data.image && (
                    <div className="recent-images mb-2">
                      <ul>
                        {data.image.map((item, index) => (
                          <li key={index}>
                            <div className="recent-img-wrap">
                              <Image src={dynamicImage(item)} className="me-0" alt="chair" />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};
export default VariationTimeline;
