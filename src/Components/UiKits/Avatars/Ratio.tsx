import { Card, CardBody, Col } from "reactstrap";
import { RatioTitle } from "../../../Constants";
import { AvatarRatioData, RatioSubTitle } from "../../../Data/UiKits/Avatars";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const Ratio = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={RatioTitle} span={RatioSubTitle} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            {AvatarRatioData &&
              AvatarRatioData.map((item, index) => (
                <div className="avatar ratio" key={index}>
                  <Image className={`b-r-8 img-${item.class}`} src={dynamicImage(item.image)} alt="user profile" />
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Ratio;
