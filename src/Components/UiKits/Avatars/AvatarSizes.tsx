import { Card, CardBody, Col } from "reactstrap";
import { Sizes } from "../../../Constants";
import { AvatarSizeData, SizesSubTitle } from "../../../Data/UiKits/Avatars";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const AvatarSizes = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CommonCardHeader title={Sizes} span={SizesSubTitle} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            {AvatarSizeData &&
              AvatarSizeData.map((item, index) => (
                <div key={index} className="avatar">
                  <Image className={`img-${item.class} rounded-circle`} src={dynamicImage(`avtar/${item.image}`)} alt="user profile" />
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarSizes;
