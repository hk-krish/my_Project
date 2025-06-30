import { Printer } from "react-feather";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Href, Print } from "../../../../Constants";
import { EmptyTaskClassProp } from "../../../../Types/Applications";
import SearchNotFoundClass from "../../../CoreComponents/SearchNotFoundClass";

const EmptyTaskClass: React.FC<EmptyTaskClassProp> = ({ title }) => {
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h4 className="mb-0">{title}</h4>
        <Link to={Href}>
          <Printer className="me-2" />
          {Print}
        </Link>
      </CardHeader>
      <CardBody>
        <SearchNotFoundClass word="task" />
      </CardBody>
    </Card>
  );
};
export default EmptyTaskClass;
