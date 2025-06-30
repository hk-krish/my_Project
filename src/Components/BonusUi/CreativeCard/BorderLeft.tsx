import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { BorderLeftTitle } from "../../../Constants";
import { BorderLeftSubTitle } from "../../../Data/BonusUi/CreativeCard";

const BorderLeft = () => {
  return (
    <Col md="6" xs="12">
      <Card>
        <CommonCardHeader title={BorderLeftTitle} span={BorderLeftSubTitle} headClass="border-l-primary pb-0" />
        <CardBody>
          <ul className="d-flex flex-column gap-1">
            <li>{"You can design your creative card by taking only the "}<strong>{"border-l-primary "}</strong>{" class. If you want to use other colors like this: "}<strong>{"border-l-*"}</strong></li>
            <li><strong>{"Visit Us: "}</strong> {"2600 Hollywood Blvd,Florida, United States-33020"}</li>
            <li><strong>{"Mail Us: "}</strong>{"contact@us@gmail.com"}</li>
            <li><strong>{"Contact Number: "}</strong>{"(954) 357-7760"}</li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BorderLeft;
