import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { FavoritesTitle } from "../../../../../Constants";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import ViewBookmark from "../../View";
import DataList from "./DataList";

const Favorites = () => {
  const { gridView } = useAppSelector((state) => state.bookmarkTab)
  return (
    <TabPane tabId="2">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h4 className="mb-0">{FavoritesTitle}</h4>
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

export default Favorites;