import { Card, CardBody, Col } from "reactstrap";
import { ShapesTitle } from "../../../Constants";
import { AvatarShapeData, ShapesSubTitle } from "../../../Data/UiKits/Avatars";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const Shapes = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CommonCardHeader title={ShapesTitle} span={ShapesSubTitle} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            {AvatarShapeData &&
              AvatarShapeData.map((item, index) => (
                <div key={index} className="avatar">
                  <Image className={`img-${item.class}`} src={dynamicImage(`avtar/${item.image}`)} alt="user profile" />
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Shapes;
