import { Link } from "react-router-dom";
import SvgIcon from "../../../../Components/CoreComponents/SvgIcon";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { SearchSuggestionListType } from "../../../../Types/Layout";
import { setResponsiveSearch } from "../../../../ReduxToolkit/Reducers/Layout/LayoutReducers";
import { Fragment } from "react/jsx-runtime";
import SearchNotFoundClass from "../../../../Components/CoreComponents/SearchNotFoundClass";

const SearchResults:React.FC<SearchSuggestionListType> = ({ searchedArray, setSearchedWord }) => {
  const dispatch = useAppDispatch();
  const handleSearch = () => {
    setSearchedWord("");
    dispatch(setResponsiveSearch());
  };
  return (
    <Fragment>
      {searchedArray?.map((item, index) => (
        <div className="Profile-Card u-cf" key={index}>
          <Link className="realname w-auto d-flex justify-content-start gap-2" to={item.url || ""} onClick={handleSearch}>
            <div className="Profile-Card-details">
            <div className="Profile-Card-avatar">
              <SvgIcon className="stroke-icon svg-color" iconId={`stroke-${item.icon}`} />
            </div>
              <div className="Profile-Card-realName">{item.title}</div>
            </div>
          </Link>
        </div>
      ))}
      {!searchedArray?.length && <SearchNotFoundClass word="Page"/>}
    </Fragment>
  );
};

export default SearchResults;
