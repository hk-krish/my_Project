import { Card, CardBody } from "reactstrap";
import { EmptyStateProp } from "../../../../Types/Applications";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import SearchNotFoundClass from "../../../CoreComponents/SearchNotFoundClass";

const EmptyState: React.FC<EmptyStateProp> = ({ title }) => {
  return (
    <Card className="mb-0">
      {title && <CommonCardHeader headClass="d-flex" title={title} span={[{ text: "0 Contacts" }]} />}
      <CardBody>
        <SearchNotFoundClass word="Contact" />
      </CardBody>
    </Card>
  );
};
export default EmptyState;