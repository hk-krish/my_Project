import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import { Alert, DefaultBreadcrumbTitle, Home, Href, UiKits } from "../../../Constants";
import { DefaultBreadcrumbSubTitle } from "../../../Data/BonusUi/Breadcrumb";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const DefaultBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={DefaultBreadcrumbTitle} span={DefaultBreadcrumbSubTitle} />
        <CardBody>
          <Breadcrumb>
            <BreadcrumbItem href={Href} tag={"a"}>{Home}</BreadcrumbItem>
            <BreadcrumbItem active>{UiKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="m-0">
            <BreadcrumbItem tag={"a"} href={Href}>{Home}</BreadcrumbItem>
            <BreadcrumbItem tag={"a"} href={Href}>{UiKits}</BreadcrumbItem>
            <BreadcrumbItem active>{Alert}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DefaultBreadcrumb;
