import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { BorderBottomTitle } from "../../../Constants";
import { BorderBottomSubTitle } from "../../../Data/BonusUi/CreativeCard";

const BorderBottom = () => {
  return (
    <Col md="6" xs="12">
      <Card>
        <CommonCardHeader title={BorderBottomTitle} span={BorderBottomSubTitle} headClass="border-b-info pb-0" />
        <CardBody>
          <p className="mb-0">
            {"By using the border-color, we can give the border in the background direction in a creative way. You can design your creative card by taking only the "}
            <em className="txt-danger">{"border-t-danger"}</em>
            {"class. If you want to use other colors like this: "}
            <em className="txt-danger">{"border-t-*"}</em>
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BorderBottom;
