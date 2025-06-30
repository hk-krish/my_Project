import { Card, CardBody, Col } from "reactstrap";
import { WithoutShadowTitle } from "../../../Constants";
import { WithoutShadowSubTitle } from "../../../Data/BonusUi/BasicCard";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const WithoutShadow = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="shadow-none border">
        <CommonCardHeader title={WithoutShadowTitle} span={WithoutShadowSubTitle} />
        <CardBody>
          <div className="flex-space flex-wrap align-items-center">
            <Image className="tab-img img-fluid" src={dynamicImage(`avtar/3.jpg`)} alt="profile" />
            <p>
              <strong>{"Visit Us: "}</strong>
              {"2600 Hollywood Blvd,Florida, United States-33020"}
              <br />
              <strong>{"Mail Us:"}</strong>
              {"contact@us@gmail.com"}
              <br />
              <strong>{"Contact Number: "}</strong>
              {"(954) 357-7760"}
            </p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WithoutShadow;
