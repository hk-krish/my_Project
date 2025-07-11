import { Badge, Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { BadgeHeadingText, BadgeHeadingsExample } from "../../../Constants";
import { BadgeHeadingSubTitle } from "../../../Data/UiKits/Tag&Pills";

const BadgeHeading = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={BadgeHeadingsExample} span={BadgeHeadingSubTitle} />
        <CardBody>
          <h1 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeadingText}1<Badge color="primary">{"Latest"}</Badge></h1>
          <h2 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeadingText}2<Badge color="secondary">{"Trending"}</Badge></h2>
          <h3 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeadingText}3<Badge color="success">{"Checkout"}</Badge></h3>
          <h4 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeadingText}4<Badge color="warning">{"Inbox"}</Badge></h4>
          <h5 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeadingText}5<Badge color="danger">{"Login"}</Badge></h5>
          <h6 className="pb-2 d-flex gap-2 flex-wrap">{BadgeHeadingText}6<Badge color="dark">{"Logout"}</Badge></h6>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BadgeHeading;
