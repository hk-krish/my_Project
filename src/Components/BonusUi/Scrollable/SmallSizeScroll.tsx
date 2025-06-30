import { Card, CardBody, Col } from "reactstrap";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { SmallScrollText, SmallSizeScrollTitle } from "../../../Constants";
import { SmallSizeScrollSubTitle } from "../../../Data/BonusUi/Scrollable";
import ScrollBar from "react-perfect-scrollbar";

const SmallSizeScroll = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={SmallSizeScrollTitle} span={SmallSizeScrollSubTitle} />
        <CardBody>
          <div className="scroll-bar-wrap">
            <ScrollBar className="scrollbar-margins large-margin scroll-demo pe-0 custom-container">
              <div className="margin-scrollbar">
                <h5 className="pb-2">{SmallScrollText}</h5>
              </div>
              <p>
                {"The Business Transformation Solution programme is a "}
                <em className="txt-danger">{"multi-level engagement program"}</em>
                {" is designed to help Small and Medium-Sized Businesses and Startups create a strong, well-functioning business organization that produces the best results quickly and effectively."}
                <Image className="img-fluid pt-3" src={dynamicImage(`banner/3.jpg`)} alt="business" />
              </p>
              <p className="m-b-0">
                {"The core of the programme is our internally developed "}
                <em className="txt-danger">{"Business Management model"}</em>
                {', "Business Foundation & Management", which was tried and true for Indian business conditions while drawing inspiration from other successful global SME Business Management techniques.'}
              </p>
            </ScrollBar>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default SmallSizeScroll;
