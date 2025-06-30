import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { PopoverDirectionTitle } from "../../../Constants";
import { PopoverDirectionSubTitle, PopoverPositions } from "../../../Data/UiKits/Popover";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import CommonPopover from "./Common/CommonPopover";

const PopoverDirection = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={PopoverDirectionTitle} span={PopoverDirectionSubTitle} />
        <CardBody className="common-flex popover-wrapper">
          {PopoverPositions &&
            PopoverPositions.map((item, index) => (
              <Fragment key={index}>
                <CommonPopover data={item} />
              </Fragment>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default PopoverDirection;
