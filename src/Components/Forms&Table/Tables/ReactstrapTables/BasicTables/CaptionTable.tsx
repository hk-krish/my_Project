import { Card, Col, Row } from "reactstrap";
import { CaptionTitle, UserList } from "../../../../../Constants";
import { CaptionSubTitle, CaptionTableBody, CaptionTableHeader } from "../../../../../Data/Forms&Table/Tables/ReactstrapTables/BasicTables";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonTable from "./Common/CommonTable";

const CaptionTable = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CaptionTitle} span={CaptionSubTitle} headClass="pb-20" tag />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive custom-scrollbar">
              <CommonTable caption={UserList} headData={CaptionTableHeader}>
                {CaptionTableBody.map((data) => (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.employeeName}</td>
                    <td>{data.email}</td>
                    <td>{data.experience}</td>
                    <td>{data.sex}</td>
                    <td>{data.number}</td>
                    <td>{data.age}</td>
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
export default CaptionTable;
