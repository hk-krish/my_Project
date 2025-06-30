import { Card, Col, Row } from "reactstrap";
import { BreckpointSpecificTitle } from "../../../../../Constants";
import { BreckPointSpecificSubTitle, BreckpointSpecificBody, BreckpointSpecificHead } from "../../../../../Data/Forms&Table/Tables/ReactstrapTables/BasicTables";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonTable from "./Common/CommonTable";

const BreckpointSpecific = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={BreckpointSpecificTitle} span={BreckPointSpecificSubTitle} headClass="pb-20" tag />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive custom-scrollbar">
              <CommonTable size="sm" headData={BreckpointSpecificHead}>
                {BreckpointSpecificBody.map((data) => (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.orderId}</td>
                    <td>{data.price}</td>
                    <td>{data.quantity}</td>
                    <td>{data.total}</td>
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
export default BreckpointSpecific