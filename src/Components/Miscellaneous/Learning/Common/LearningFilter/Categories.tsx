import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { Badge, Button, Card, CardBody, CardHeader, Col, Collapse } from "reactstrap";
import { CategoriesTitle, Href } from "../../../../../Constants";
import { CategoriesData } from "../../../../../Data/Miscellaneous/Learning";

const Categories = () => {
  const [isDesign, setIsDesign] = useState(true);

  return (
    <Col xl="12">
      <Card>
        <CardHeader>
          <h5 className="mb-0">
            <Button color="transparent" className="btn-link d-flex align-items-center gap-2 justify-content-between" onClick={() => setIsDesign(!isDesign)}>
              {CategoriesTitle} {isDesign ? <ChevronDown /> : <ChevronUp />}
            </Button>
          </h5>
        </CardHeader>
        <CardBody className="px-0">
          <Collapse isOpen={isDesign}>
            {CategoriesData.map((data) => (
              <div className={`categories ${data.id === 2 ? "pt-0" : ""}`} key={data.id}>
                <div className="learning-header">
                  <span className="f-w-600">{data.title}</span>
                </div>
                <ul>
                  {data.child.map((item) => (
                    <li key={item.id}>
                      <a href={Href}>{item.text} </a>
                      <Badge color="primary" className="pull-right">{item.value}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Collapse>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Categories;
