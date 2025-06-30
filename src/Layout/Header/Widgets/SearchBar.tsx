import { useEffect, useState } from "react";
import { Col, Form, Input } from "reactstrap";
import { menuList } from "../../../Data/Layout/SidebarMenuList";
import { MenuItem, SearchSuggestionItem } from "../../../Types/Layout";
import SearchResults from "./Common/SearchResults";
import SvgIcon from "../../../Components/CoreComponents/SvgIcon";

const SearchBar = () => {
  const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);

  useEffect(() => {
    const suggestionArray: SearchSuggestionItem[] = [];
    const getAllLink = (item: MenuItem, icon: string | undefined) => {
      if (item.menu) item.menu.forEach((ele) => getAllLink(ele, icon));
      else suggestionArray.push({ icon: icon, title: item.title, url: item.url || "" });
    };
    menuList?.forEach((item) => item.Items?.forEach((child) => getAllLink(child, child.icon)));
    setArr(suggestionArray);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!searchedWord) setSearchedWord("");
    const searchKey = e.target.value;
    setSearchedWord(searchKey);
    if (searchKey !== "") {
      document.body.classList.add("offcanvas");
      const result = arr.filter((item) => item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
      setSearchedArray(result);
    } else document.body.classList.remove("offcanvas");
  };

  return (
    <Col sm="4" className=" form-inline search-full d-none d-xl-block">
      <Form > 
        <div className="form-group">
          <div className="typeahead typeahead--twitterUsers">
            <div className="u-posRelative">
              <Input className="demo-input typeahead-input form-control-plaintext w-100" type="text" placeholder="Type to Search .." onChange={(e) => handleSearch(e)} />
              <SvgIcon className="search-bg svg-color" iconId="search" />
            </div> 
            <div className={`typeahead-menu custom-scrollbar ${searchedWord.length ? "is-open" : ""}`}>
              <SearchResults searchedArray={searchedArray} setSearchedWord={setSearchedWord} />
            </div>
          </div>
        </div>
      </Form>
    </Col>
  );
};

export default SearchBar;
