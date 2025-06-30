import { Card, CardBody, Col, Row } from "reactstrap";
import { IconsBodyProps } from "../../../Types/Component";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const IcoIconBody: React.FC<IconsBodyProps> = ({ title, iconType, parentCallback }) => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={title} />
        <CardBody>
          <Row className="icon-lists">
            {iconType.map((icon, i) => (
              <Col sm="6" md="4" lg="3" key={i} onClick={() => parentCallback(icon)}>
                <i className={`icofont icofont-${icon}`}></i>
                {icon}
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default IcoIconBody;
