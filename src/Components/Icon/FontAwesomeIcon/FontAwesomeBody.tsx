import { Card, CardBody, Col, Row } from "reactstrap";
import { IconsBodyProps } from "../../../Types/Component";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { Icons } from "../../../Constants";

const FontAwesomeBody:React.FC<IconsBodyProps> = ({ title, iconType, parentCallback }) => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={`${title} ${Icons} `} />
        <CardBody>
          <Row className="icon-lists">
            {iconType.map((icon, i) => (
              <Col sm="6" md="4" xl="3" key={i} onClick={() => parentCallback(icon)}>
                <i className={`fa fa-${icon}`}></i> {"fa fa-"}
                {icon}
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontAwesomeBody;