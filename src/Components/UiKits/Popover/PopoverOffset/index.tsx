import { Card, CardBody, Col } from "reactstrap";
import { PopoverOffsetTitle } from "../../../../Constants";
import { PopoverOffsetSubTitle } from "../../../../Data/UiKits/Popover";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import OffsetLeft from "./OffsetLeft";
import OffsetRight from "./OffsetRight";

const PopoverOffset = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={PopoverOffsetTitle} span={PopoverOffsetSubTitle} />
        <CardBody className="common-flex popover-wrapper">
          <OffsetRight />
          <OffsetLeft />
        </CardBody>
      </Card>
    </Col>
  );
};
export default PopoverOffset;
