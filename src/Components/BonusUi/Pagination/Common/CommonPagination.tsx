import { Fragment } from "react/jsx-runtime";
import { Card, CardBody, Col } from "reactstrap";
import { CommonPaginationListType } from "../../../../Types/BonusUi";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import DefaultPagination from "./DefaultPagination";

const CommonPagination: React.FC<CommonPaginationListType> = ({ title, span, pageClass, pageColor, data, active, disabled, classLink, listClass, size, multiData, colClass }) => {
  return (
    <Col className={colClass ? colClass : "col-md-6"}>
      <Card>
        <CommonCardHeader title={title} span={span} />
        <CardBody>
          {multiData ? (
            multiData.map((item, index) => (
              <Fragment key={index}>
                <DefaultPagination pageColor={item.pageColor} data={item.data} pageClass={item.pageClass} active={item.active} listClass={item.listClass} size={item.size} />
              </Fragment>
            ))
          ) : (
            <DefaultPagination pageColor={pageColor} data={data} pageClass={pageClass} active={active} disabled={disabled} classLink={classLink} listClass={listClass} size={size} />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};
export default CommonPagination;
