import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { BasicPopoverTitle } from "../../../Constants";
import { BasicPopoverData, BasicPopoverSubTitle } from "../../../Data/UiKits/Popover";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import CommonPopover from "./Common/CommonPopover";

const BasicPopover = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={BasicPopoverTitle} span={BasicPopoverSubTitle} />
        <CardBody className="common-flex popover-wrapper">
          {BasicPopoverData &&
            BasicPopoverData.map((item, index) => (
              <Fragment key={index}>
                <CommonPopover data={item} />
              </Fragment>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default BasicPopover;
