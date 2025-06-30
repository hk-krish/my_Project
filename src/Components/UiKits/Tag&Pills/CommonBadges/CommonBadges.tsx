import { Badge, Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { BadgesType } from "../../../../Types/UiKitsType";

const CommonBadges:React.FC<BadgesType> = ({ title, span, data, roundedPills, number, className, icon }) => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={title} span={span} />
        <CardBody>
          <div className="badge-spacing">
            {data.map((item) => (
              <Badge pill={roundedPills} color={`${item.badgeClass ? "transparent" : item.color}`} key={item.id} className={`${item.badgeClass ? item.badgeClass : className }`}>
                {number ? item.id : item.text}
                {icon && item.iconName}
              </Badge>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CommonBadges;
