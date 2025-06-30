import { Badge, Button, Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { BadgesPartButtons } from "../../../Constants";
import { BadgeButtonData, BadgeButtonSubTitle } from "../../../Data/UiKits/Tag&Pills";

const BadgeButton = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={BadgesPartButtons} span={BadgeButtonSubTitle} />
        <CardBody>
          <div className="badge-spacing flex-column align-items-start">
            {BadgeButtonData &&
              BadgeButtonData.map((item, index) => (
                <Button color={item.class} className="d-flex align-items-center" key={index}>
                  {item.text}
                  <Badge color="light" className="rounded-circle btn-p-space text-dark ms-2">
                    {item.iconName}
                  </Badge>
                </Button>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BadgeButton;
