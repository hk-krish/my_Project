import { Card, CardBody, Col, Row } from "reactstrap";
import { Icons } from "../../../Constants";
import { IconsBodyProps } from "../../../Types/Component";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const ThemifyIconBody: React.FC<IconsBodyProps> = ({ title, iconType, parentCallback }) => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={`${title} ${Icons}`} />
        <CardBody>
          <Row className="icon-lists">
            {iconType.map((icon, i) => (
              <Col sm="6" md="4" lg="3" key={i} onClick={() => parentCallback(icon)}>
                <i className={icon}></i>
                {icon}
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ThemifyIconBody;
