import { Card, Col, Row } from "reactstrap";
import { StripedRowInverseTableTitle } from "../../../../../Constants";
import { StripedRowInverseBody, StripedRowInverseHead, StripedRowWithInverseTableSubTitle } from "../../../../../Data/Forms&Table/Tables/ReactstrapTables/BasicTables";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonTable from "./Common/CommonTable";

const StripedRowInverseTable = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={StripedRowInverseTableTitle} span={StripedRowWithInverseTableSubTitle} headClass="pb-20" tag />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive custom-scrollbar">
              <CommonTable strip={true} tableClass="table-inverse" headData={StripedRowInverseHead}>
                {StripedRowInverseBody.map((data) => (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.dessert}</td>
                    <td>{data.calories}</td>
                    <td>{data.fat}</td>
                    <td>{data.price}</td>
                  </tr>
                ))}
              </CommonTable>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
export default StripedRowInverseTable;
