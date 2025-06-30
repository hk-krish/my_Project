import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { DropdownCommonType } from "../../../../Types/UiKitsType";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import DropdownCommon from "./DropdownCommon";

const BasicDropdown: React.FC<DropdownCommonType> = ({ title, span, colClass, bodyClass, data, toggleClass }) => {
  return (
    <Col className={colClass}>
      <Card>
        <CommonCardHeader title={title} span={span} />
        <CardBody className={bodyClass ? bodyClass : "rtl-dropdown"}>
          <div className="common-flex">
            {data &&
              data.map((item, index) => (
                <Fragment key={index}>
                  <DropdownCommon item={item} toggleClass={toggleClass} />
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BasicDropdown;
