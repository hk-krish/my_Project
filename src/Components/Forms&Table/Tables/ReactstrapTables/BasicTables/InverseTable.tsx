import { Card, Col } from "reactstrap";
import { InverseTableTitle } from "../../../../../Constants";
import CommonTable from "./Common/CommonTable";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { InverseTableBody, InverseTableHeader, InverseTableSubTitle } from "../../../../../Data/Forms&Table/Tables/ReactstrapTables/BasicTables";

const InverseTable = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={InverseTableTitle} span={InverseTableSubTitle} headClass="pb-20" tag/>
        <div className="table-responsive custom-scrollbar">
          <CommonTable tableClass="table-inverse" headData={InverseTableHeader} headRowClass="border-bottom-light">
            {InverseTableBody.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.office}</td>
                <td>{data.position}</td>
                <td>{data.salary}</td>
                <td>{data.joinDate}</td>
                <td>{data.age}</td>
              </tr>
            ))}
          </CommonTable>
        </div>
      </Card>
    </Col>
  );
};
export default InverseTable;
