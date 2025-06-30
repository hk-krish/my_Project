import { Card, CardBody, Col } from "reactstrap";
import { AbsoluteCard } from "../../../Constants";
import { dynamicImage, Image } from "../../../Utils";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const AbsoluteSecondary = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="card-absolute">
        <CommonCardHeader headClass="bg-secondary" tagClass="txt-light" title={AbsoluteCard} />
        <CardBody>
          <div className="d-flex list-behavior-1 align-items-center">
            <div className="flex-shrink-0">
              <Image className="tab-img img-fluid" src={dynamicImage(`blog/blog.jpg`)} alt="home" />
            </div>
            <div className="flex-grow-1">
              <p className="mb-xl-0 mb-sm-4">{"Absolute Card is made by using "}<em className="txt-danger">{"flex-shrink-0, flex-grow-1 & card-absolute "}</em>{" classes. you can do any of your designs using these classes. Subtracting the total size of all the flex items from the size of the flex container yields the leftover space."}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default AbsoluteSecondary;
