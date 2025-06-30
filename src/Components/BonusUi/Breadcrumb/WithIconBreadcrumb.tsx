import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import { BonusUi, BreadcrumbTitle, Href, WithIconBreadcrumbTitle } from "../../../Constants";
import { WithIconBreadcrumbSubTitle } from "../../../Data/BonusUi/Breadcrumb";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const WithIconBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={WithIconBreadcrumbTitle} span={WithIconBreadcrumbSubTitle} />
        <CardBody>
          <Breadcrumb className="bg-white p-l-0">
            <BreadcrumbItem href={Href} tag={"a"}><i className="fa fa-home" /></BreadcrumbItem>
            <BreadcrumbItem active>{BonusUi}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="bg-white m-b-0 p-b-0 p-l-0">
            <BreadcrumbItem tag={"a"} href={Href}><i className="fa fa-home" /></BreadcrumbItem>
            <BreadcrumbItem href={Href}>{BonusUi}</BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbTitle}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WithIconBreadcrumb;
