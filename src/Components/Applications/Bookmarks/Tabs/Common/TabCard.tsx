import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { CommonTabCardProp } from "../../../../../Types/Applications";
import SearchNotFoundClass from "../../../../CoreComponents/SearchNotFoundClass";
import ViewBookmark from "../../View";

const TabCard: React.FC<CommonTabCardProp> = ({ tabId, title }) => {
  return (
    <TabPane tabId={tabId}>
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h4 className="mb-0">{title}</h4>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <SearchNotFoundClass word="Bookmark" />
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default TabCard;
