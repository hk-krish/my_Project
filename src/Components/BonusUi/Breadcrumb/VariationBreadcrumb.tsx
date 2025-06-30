import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import { BasicTables, BootstrapArrow, HomeArrow, Href, TablesArrow, VariationBreadcrumbTitle } from "../../../Constants";
import { VariationBreadcrumbSubTitle } from "../../../Data/BonusUi/Breadcrumb";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const VariationBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={VariationBreadcrumbTitle} span={VariationBreadcrumbSubTitle} />
        <CardBody className="breadcrumb-space">
          <Breadcrumb className="breadcrumb-no-divider mb-0 gap-2">
            <BreadcrumbItem className="mb-1 mb-xl-0" tag="a" href={Href}>{HomeArrow}</BreadcrumbItem>
            <BreadcrumbItem className="ps-0 mb-1 mb-xl-0" tag="a" href={Href}>{TablesArrow}</BreadcrumbItem>
            <BreadcrumbItem className="ps-0 mb-1 mb-xl-0" tag="a" href={Href}>{BootstrapArrow}</BreadcrumbItem>
            <BreadcrumbItem className="ps-0" active>{BasicTables}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};
export default VariationBreadcrumb;
