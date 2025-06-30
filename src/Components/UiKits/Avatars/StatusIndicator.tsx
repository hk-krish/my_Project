import { Card, CardBody, Col } from "reactstrap";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { StatusIndicatorTitle } from "../../../Constants";
import { AvatarStatusData, StatusSubTitle } from "../../../Data/UiKits/Avatars";

const StatusIndicator = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CommonCardHeader title={StatusIndicatorTitle} span={StatusSubTitle} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            {AvatarStatusData &&
              AvatarStatusData.map((item, index) => (
                <div className="avatar" key={index}>
                  <Image className={`img-${item.class} rounded-circle`} src={dynamicImage(item.image)} alt="user profile" />
                  <div className={`status bg-${item.status}`} />
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default StatusIndicator;
