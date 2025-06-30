import { Card, CardBody, Col, Table } from "reactstrap";
import { ColoredHeadingTitle } from "../../../../Constants";
import { ColorHeadData, HeadingSubTitle } from "../../../../Data/UiKits/Typography";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import ColoredHeadBody from "./ColoredHeadBody";

const ColoredHeadings = () => {
  return (
    <Col xxl="6">
      <Card>
        <CommonCardHeader title={ColoredHeadingTitle} span={HeadingSubTitle}/>
        <CardBody>
          <div className="table-responsive custom-scrollbar">
            <Table className="mb-0 typography-table">
              <thead>
                <tr>
                  {ColorHeadData.map((item, index) => (
                    <th key={index} className="pt-0">{item.name}</th>
                  ))}
                </tr>
              </thead>
              <ColoredHeadBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
export default ColoredHeadings