import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { CreatedByMeTitle } from "../../../../Constants";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import ViewBookmark from "../View";
import DataList from "./Common/DataList";

const Created = () => {
  const { gridView } = useAppSelector((state) => state.bookmarkTab);

  return (
    <TabPane tabId="1">
      <Card className="mb-0">
        <CardHeader className="d-flex pb-0">
          <h4 className="mb-0">{CreatedByMeTitle}</h4>
          <ViewBookmark />
        </CardHeader>
        <CardBody className="pb-0">
          <div className={`details-bookmark text-center ${!gridView ? "list-bookmark" : ""}`}>
            <DataList />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default Created;