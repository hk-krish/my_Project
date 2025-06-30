import { Grid, List } from "react-feather";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { Href } from "../../../../../../Constants";
import { useAppDispatch } from "../../../../../../ReduxToolkit/Hooks";
import { setColView, setListView } from "../../../../../../ReduxToolkit/Reducers/ECommerce/FilterSlice";

const GridAndListView = () => {
  const dispatch = useAppDispatch();
  const gridLayout = () => {
    dispatch(setListView(false));
    dispatch(setColView("col-xl-3 col-lg-4 col-sm-6"));
  };

  return (
    <Fragment>
      <div className="square-product-setting d-inline-block">
        <Link className="icon-grid grid-layout-view" to={Href} onClick={gridLayout}>
          <Grid />
        </Link>
      </div>
      <div className="square-product-setting d-inline-block">
        <Link className="icon-grid m-0 list-layout-view" to={Href} onClick={() => dispatch(setListView(true))}>
          <List />
        </Link>
      </div>
    </Fragment>
  );
};

export default GridAndListView;