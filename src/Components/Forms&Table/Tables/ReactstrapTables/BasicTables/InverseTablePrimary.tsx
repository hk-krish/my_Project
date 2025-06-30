import { Card, Col } from "reactstrap";
import { InverseTablePrimaryTitle } from "../../../../../Constants";
import CommonTable from "./Common/CommonTable";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { InversePrimaryBody, InversePrimaryHeader, InverseTablePrimarySubTitle } from "../../../../../Data/Forms&Table/Tables/ReactstrapTables/BasicTables";

const InverseTablePrimary = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={InverseTablePrimaryTitle} span={InverseTablePrimarySubTitle} headClass="pb-20" tag />
        <div className="table-responsive custom-scrollbar">
          <CommonTable strip={true} headData={InversePrimaryHeader} tableClass="bg-primary" headClass="tbl-strip-thad-bdr">
            {InversePrimaryBody.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.company}</td>
                <td>{data.salary}</td>
                <td>{data.email}</td>
                <td>{data.position}</td>
                <td>{data.country}</td>
              </tr>
            ))}
          </CommonTable>
        </div>
      </Card>
    </Col>
  );
};
export default InverseTablePrimary