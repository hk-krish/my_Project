import { Card, CardBody, Col, Table } from "reactstrap";
import { HeadingsTitle } from "../../../../Constants";
import { HeadingSubTitle, HeadingTableHead } from "../../../../Data/UiKits/Typography";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import HeadingBody from "./HeadingBody";

const Headings = () => {
  return (
    <Col xxl="6">
      <Card>
        <CommonCardHeader title={HeadingsTitle} span={HeadingSubTitle}/>
        <CardBody>
          <div className="table-responsive custom-scrollbar">
            <Table className="mb-0 typography-table">
              <thead>
                <tr>
                  {HeadingTableHead.map((item, index) => (
                    <th key={index} className="pt-0">{item.name}</th>
                  ))}
                </tr>
              </thead>
              <HeadingBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Headings;
