import { Card, Col, Row } from "reactstrap";
import { DashedBorderTitle } from "../../../../../Constants";
import { DashedBorderBody, DashedBorderHeader, DashedBorderSubTitle } from "../../../../../Data/Forms&Table/Tables/ReactstrapTables/BasicTables";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonTable from "./Common/CommonTable";

const DashedBorder = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={DashedBorderTitle} span={DashedBorderSubTitle} headClass="pb-20" tag />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive custom-scrollbar">
              <CommonTable tableClass="table-dashed" headData={DashedBorderHeader}>
                {DashedBorderBody.map((data) => (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.activity}</td>
                    <td>{data.category}</td>
                    <td>{data.time}</td>
                    <td>{data.instructor}</td>
                    <td>{data.capacity}</td>
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

export default DashedBorder;
