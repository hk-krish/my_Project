import { Card, Col, Row } from "reactstrap";
import { ResponsiveLightBackgroundTitle } from "../../../../../Constants";
import CommonTable from "./Common/CommonTable";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { ResponsiveLightBackgroundBody, ResponsiveLightBackgroundHead, ResponsiveTablesSubTitle } from "../../../../../Data/Forms&Table/Tables/ReactstrapTables/BasicTables";

const ResponsiveLightBackground = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={ResponsiveLightBackgroundTitle} span={ResponsiveTablesSubTitle} headClass="pb-20" tag />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive custom-scrollbar">
              <CommonTable tableClass="light-card" headData={ResponsiveLightBackgroundHead}>
                {ResponsiveLightBackgroundBody.map((data) => (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.task}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.assign}</td>
                    <td>{data.date}</td>
                    <td>{data.price}</td>
                    <td className={`font-${data.color}`}>{data.status}</td>
                    <td>{data.progress}</td>
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
export default ResponsiveLightBackground;
