import { Link } from "react-router-dom";
import { Href } from "../../../../../../Constants";
import { FilterProductData } from "../../../../../../Data/Applications/ECommerce";
import { useAppDispatch } from "../../../../../../ReduxToolkit/Hooks";
import { setColView } from "../../../../../../ReduxToolkit/Reducers/ECommerce/FilterSlice";

const GridOptions = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="grid-options d-inline-block">
      <ul>
        {FilterProductData.map((data, index) => (
          <li key={index} onClick={() => dispatch(setColView(data.colClass))}>
            <Link className={`product-${data.id}-layout-view`} to={Href}>
              {data.filterData.map((item, number) => (
                <span key={number} className={`line-grid line-grid-${item} bg-primary`}></span>
              ))}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GridOptions;
