import { Card, CardBody, Col, Table } from "reactstrap";
import GridTableBody from "./GridTableBody";
import GridTableHead from "./GridTableHead";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { GridOptionsTitle } from "../../../../Constants";
import { GridOptionsSubTitle } from "../../../../Data/UiKits/Grid";

const GridOptions = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={GridOptionsTitle} span={GridOptionsSubTitle} />
        <CardBody>
          <div className="table-responsive custom-scrollbar">
            <Table bordered striped>
              <GridTableHead />
              <GridTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default GridOptions;
