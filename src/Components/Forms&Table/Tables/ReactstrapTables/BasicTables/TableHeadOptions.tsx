import { Card, Col, Row } from "reactstrap";
import { TableHeadOptionsTitle } from "../../../../../Constants";
import { TableHeadOptionBody, TableHeadOptionHeader, TableHeadOptionsSubTitle } from "../../../../../Data/Forms&Table/Tables/ReactstrapTables/BasicTables";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonTable from "./Common/CommonTable";

const TableHeadOptions = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={TableHeadOptionsTitle} span={TableHeadOptionsSubTitle} headClass="pb-20" tag />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive custom-scrollbar">
              <CommonTable headClass="table-dark" headData={TableHeadOptionHeader}>
                {TableHeadOptionBody.map((data) => (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.userName}</td>
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
export default TableHeadOptions;
