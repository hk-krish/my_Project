import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import { DividerBreadcrumbTitle, Home, Href, Progress, UiKits } from "../../../Constants";
import { DividerBreadcrumbSubTitle } from "../../../Data/BonusUi/Breadcrumb";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const DividerBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={DividerBreadcrumbTitle} span={DividerBreadcrumbSubTitle} />
        <CardBody>
          <Breadcrumb className="breadcrumb-icon">
            <BreadcrumbItem href={Href} tag={"a"}>{Home}</BreadcrumbItem>
            <BreadcrumbItem active>{UiKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="m-0 breadcrumb-icon">
            <BreadcrumbItem tag={"a"} href={Href}>{Home}</BreadcrumbItem>
            <BreadcrumbItem tag={"a"} href={Href}>{UiKits}</BreadcrumbItem>
            <BreadcrumbItem active>{Progress}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DividerBreadcrumb;
