import { Card, CardBody, Col } from "reactstrap";
import { ImageSizeTitle } from "../../../Constants";
import { ImageData, ImageSubTitle } from "../../../Data/UiKits/HelperClasses";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const ImageSize = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={ImageSizeTitle} span={ImageSubTitle} />
        <CardBody>
          <div className="card-wrapper">
            <div className="gradient-border gap-3">{ImageData && ImageData.map((item, index) => <Image className={`img-${item.size} img-h-${item.size}`} src={dynamicImage(`blog/comment.jpg`)} alt="img-size" key={index} />)}</div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ImageSize;
