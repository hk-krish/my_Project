import { Card, CardBody, Col, Row } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { GridColumnTitle } from "../../../Constants";
import { GridColumnData, GridColumnSubTitle } from "../../../Data/UiKits/Grid";

const GridColumn = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={GridColumnTitle} span={GridColumnSubTitle} />
        <CardBody className="grid-showcase">
          <Row>
            {GridColumnData &&
              GridColumnData.map((item, index) => (
                <Col md={item} className="text-center" key={index}>
                  <span>{`col-md-${item}`}</span>
                </Col>
              ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default GridColumn;
