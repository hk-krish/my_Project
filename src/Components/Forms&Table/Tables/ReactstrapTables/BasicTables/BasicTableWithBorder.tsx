import { Badge, Card, Col } from "reactstrap";
import { dynamicImage, Image } from "../../../../../Utils";
import { BasicTableWithBorderTitle } from "../../../../../Constants";
import CommonTable from "./Common/CommonTable";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { BasicTableBody, BasicTableHeader, BasicTableWithBorderSubTitle } from "../../../../../Data/Forms&Table/Tables/ReactstrapTables/BasicTables";

const BasicTableWithBorder = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={BasicTableWithBorderTitle} span={BasicTableWithBorderSubTitle} headClass="pb-20" tag />
        <div className="table-responsive custom-scrollbar">
          <CommonTable headData={BasicTableHeader} headRowClass="border-bottom-primary">
            {BasicTableBody.map((data) => (
              <tr className={`border-bottom-${data.color}`} key={data.id}>
                <th scope="row">{data.id}</th>
                <td><Image className="img-30 me-2" src={dynamicImage(`user/${data.image}`)} alt="users" />{data.firstname}</td>
                <td>{data.lastName}</td>
                <td>{data.userName}</td>
                <td>{data.designation}</td>
                <td>{data.company}</td>
                <td><Badge color={`light-${data.badgeColor}`} className={`text-${data.badgeColor}`}>{data.language}</Badge></td>
                <td>{data.country}</td>
              </tr>
            ))}
          </CommonTable>
        </div>
      </Card>
    </Col>
  );
};
export default BasicTableWithBorder;
