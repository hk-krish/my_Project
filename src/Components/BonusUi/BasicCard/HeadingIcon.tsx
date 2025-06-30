import { Card, CardBody, Col } from "reactstrap";
import { IconHeadingTitle } from "../../../Constants";
import { HeadingIconSubTitle } from "../../../Data/BonusUi/BasicCard";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const HeadingIcon = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={IconHeadingTitle} span={HeadingIconSubTitle} icon={<i className="icofont icofont-library me-2"></i>} />
        <CardBody>
          <div className="d-flex gap-3 align-items-center list-behavior-1 mb-0">
            <div className="flex-shrink-0">
              <Image className="tab-img img-fluid" src={dynamicImage(`blog/img.png`)} alt="home" />
            </div>
            <div className="flex-grow-1 ms-0">
              <p className="mb-0">{"We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration, Search Engine Optimization and other Internet Marketing, Renewal of Services timely and effectively."}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default HeadingIcon;
