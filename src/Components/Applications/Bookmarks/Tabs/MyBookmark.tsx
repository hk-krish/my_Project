import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import ViewBookmark from "../View";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { MyBookmarkTitle } from "../../../../Constants";
import DataList from "./Common/DataList";

const MyBookmark = () => {
  const { gridView } = useAppSelector((state) => state.bookmarkTab);
  return (
    <TabPane tabId="4">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h4 className="mb-0">{MyBookmarkTitle}</h4>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div className={`details-bookmark text-center ${gridView ? "" : "list-bookmark"}`}>
            <DataList />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default MyBookmark;
