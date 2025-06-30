import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import SvgIcon from "../../../../Components/CoreComponents/SvgIcon";
import { Back, Href } from "../../../../Constants";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { handleBookmarkChange, setFlip } from "../../../../ReduxToolkit/Reducers/Layout/LayoutReducers";
import { BookmarkedDataType } from "../../../../Types/Layout";

const BookmarkBack = () => {
  const dispatch = useAppDispatch();
  const [searchedItems, setSearchedItems] = useState<BookmarkedDataType[]>([]);
  const [searchWord, setSearchWord] = useState("");
  const { linkItemsArray } = useAppSelector((store) => store.layout);

  const handleBackButton = () => {
    dispatch(setFlip());
    setSearchWord("");
  };

  const searchItems = (e: string) => {
    let copyArray = [...linkItemsArray];
    let result = copyArray.filter((item, i) => item.title?.toLowerCase().includes(e.toLowerCase()));
    setSearchedItems(result);
  };

  const bookMarkInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
    searchItems(e.target.value);
  };

  return (
    <div className="back">
      <ul>
        <li>
          <div className="bookmark-dropdown flip-back-content">
            <Input type="text" placeholder="search..." onChange={(e) => bookMarkInputChange(e)} value={searchWord} />
          </div>
          <div className={`filled-bookmark py-0 typeahead-menu  ${searchWord ? "is-open" : ""} custom-scrollbar`}>
            {searchedItems?.map((item: any, i: number) => (
              <div key={i} className="Profile-Card u-cf">
                <div className="Profile-Card-avatar"><SvgIcon className={`fill-icon`} iconId={`fill-${item.icon}`} /></div>
                <div className="Profile-Card-details">
                  <div className="Profile-Card-realName">
                    <Link className="realname" to={Href}>{item.title}</Link>
                    <span className="pull-right">
                      <a href={Href}>
                        <SvgIcon iconId="fill-star" className={`svg-color icon-star ${linkItemsArray[item.id - 1].bookmarked ? "starred" : ""}`} onClick={() => dispatch(handleBookmarkChange(linkItemsArray[item.id - 1]))} />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {!searchedItems.length && <p>Opps!! There are no result found.</p>}
          </div>
        </li>
        <li onClick={handleBackButton}>
          <a className="f-w-700 d-block flip-back" id="flip-back" href={Href}>
            {Back}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BookmarkBack;