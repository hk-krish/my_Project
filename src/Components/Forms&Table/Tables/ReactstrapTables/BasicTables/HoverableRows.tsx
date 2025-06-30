import { Card, Col } from "reactstrap";
import { HoverableRowsTitle } from "../../../../../Constants";
import { HoverAbleRowsSubTitle, HoverableRowsBody, HoverableRowsHeader } from "../../../../../Data/Forms&Table/Tables/ReactstrapTables/BasicTables";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonTable from "./Common/CommonTable";

const HoverableRows = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={HoverableRowsTitle} span={HoverAbleRowsSubTitle} headClass="pb-20" tag />
        <div className="table-responsive signal-table custom-scrollbar">
          <CommonTable headData={HoverableRowsHeader} hover={true}>
            {HoverableRowsBody.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td className="d-flex align-items-center">
                  {data.icon}
                  <span className={`font-${data.color}`}>{data.status}</span>
                </td>
                <td>{data.signalName}</td>
                <td>{data.security}</td>
                <td>{data.stage}</td>
                <td>{data.schedule}</td>
                <td>{data.teamLead}</td>
              </tr>
            ))}
          </CommonTable>
        </div>
      </Card>
    </Col>
  );
};
export default HoverableRows;
