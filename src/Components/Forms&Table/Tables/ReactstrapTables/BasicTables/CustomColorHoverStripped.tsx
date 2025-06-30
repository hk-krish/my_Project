import { Card, Col } from "reactstrap";
import { CustomColorHoverStrippedTitle } from "../../../../../Constants";
import { CustomColorHoverStrippedBody, CustomColorHoverStrippedHead, CustomTableSubTitle } from "../../../../../Data/Forms&Table/Tables/ReactstrapTables/BasicTables";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonTable from "./Common/CommonTable";

const CustomColorHoverStripped = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CustomColorHoverStrippedTitle} span={CustomTableSubTitle} headClass="pb-20" tag />
        <div className="table-responsive custom-scrollbar">
          <CommonTable strip={true} hover={true} tableClass="bg-primary" headClass="tbl-strip-thad-bdr" headData={CustomColorHoverStrippedHead}>
            {CustomColorHoverStrippedBody.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.title}</td>
                <td>{data.year}</td>
                <td>{data.studio}</td>
                <td>{data.budget}</td>
                <td>{data.boxOffice}</td>
              </tr>
            ))}
          </CommonTable>
        </div>
      </Card>
    </Col>
  );
};
export default CustomColorHoverStripped;
