import { Card, CardBody, CardFooter, Col } from "reactstrap";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { CardFooterText, DarkCardTitle } from "../../../Constants";
import { DarkCardSubTitle } from "../../../Data/BonusUi/BasicCard";

const DarkCard = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader headClass="bg-dark pb-0" tagClass="text-white" title={DarkCardTitle} span={DarkCardSubTitle} />
        <CardBody className="bg-dark">
          <div className="d-flex align-items-center gap-3 pills-blogger">
            <div className="blog-wrapper">
              <Image className="blog-img" src={dynamicImage(`dashboard-2/headphones.png`)} alt="head-phone" />
            </div>
            <div className="blog-content">
              <p>
                <em className="txt-danger fw-bold">{"Smart headphones"} </em>
                {"— also called smart earbuds or hearable — are high-tech in-ear devices that do more than transmit audio. These headphones are usually wireless, and they can sync up with your phone, tablet, computer or other Bluetooth-enabled device. The main appeal of hearables is convenience, as they allow you to complete common tasks without directly accessing your phone or computer. Smart wireless headphones sync up to other devices using Bluetooth technology, and many of their features rely on data from your smartphone or computer."}
              </p>
            </div>
          </div>
        </CardBody>
        <CardFooter className="bg-dark">
          <h6 className="mb-0 txt-light">{CardFooterText}</h6>
        </CardFooter>
      </Card>
    </Col>
  );
};
export default DarkCard;
