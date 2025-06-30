import { Card, CardBody, Col } from "reactstrap";
import { Display, DisplayHeadingTitle } from "../../../Constants";
import { DisplayData } from "../../../Data/UiKits/Typography";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const DisplayHeading = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={DisplayHeadingTitle} tagClass="mb-0" span={DisplayData} />
        <CardBody className="d-flex flex-column gap-2">
          {[...Array(4)].map((_, index) => (
            <h3 key={index} className={`display-${index + 1}`}>
              {Display} {index + 1}
            </h3>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default DisplayHeading;
