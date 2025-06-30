import { Grid, List } from "react-feather";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { setGridView } from "../../../ReduxToolkit/Reducers/BookmarkTabSlice";
import { Href } from "../../../Constants";
import { Link } from "react-router-dom";

const ViewBookmark = () => {
  const dispatch = useAppDispatch();
  return (
    <ul>
      <li>
        <Link className="grid-bookmark-view" to={Href}>
          <Grid onClick={() => dispatch(setGridView(true))} />
        </Link>
      </li>
      <li>
        <Link className="list-layout-view" to={Href}>
          <List onClick={() => dispatch(setGridView(false))} />
        </Link>
      </li>
    </ul>
  );
};
export default ViewBookmark;
