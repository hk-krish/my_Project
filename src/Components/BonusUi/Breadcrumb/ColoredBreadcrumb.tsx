import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import { ColoredBreadcrumbTitle, Href } from "../../../Constants";
import { ColorBreadcrumbSubTitle, ColoredBreadcrumbData } from "../../../Data/BonusUi/Breadcrumb";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const ColoredBreadcrumb = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={ColoredBreadcrumbTitle} span={ColorBreadcrumbSubTitle} />
        <CardBody>
          {ColoredBreadcrumbData.map((data) => (
            <Breadcrumb className={`breadcrumb-colored m-b-30 bg-${data.color}`} key={data.id}>
              {data.item.map((list, index) => (
                <BreadcrumbItem className="fw-bold mb-0" href={Href} key={index} active={index === 2 ? true : false}>{list}</BreadcrumbItem>
              ))} 
            </Breadcrumb>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default ColoredBreadcrumb;
