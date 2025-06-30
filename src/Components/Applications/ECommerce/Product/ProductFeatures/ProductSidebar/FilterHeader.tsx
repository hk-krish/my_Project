import { CardHeader } from "reactstrap";
import { Filters } from "../../../../../../Constants";
import { useAppDispatch } from "../../../../../../ReduxToolkit/Hooks";
import { setSideBarOn } from "../../../../../../ReduxToolkit/Reducers/ECommerce/FilterSlice";

const FilterHeader = () => {
  const dispatch = useAppDispatch();

  return (
    <CardHeader onClick={() => dispatch(setSideBarOn())}>
      <h6 className="mb-0">
        {Filters}
        <span className="pull-right">
          <i className="fa fa-chevron-down toggle-data"></i>
        </span>
      </h6>
    </CardHeader>
  );
};
export default FilterHeader;
