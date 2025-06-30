import { useState } from "react";
import { Search } from "react-feather";
import { Card, Col, Input, InputGroup, InputGroupText } from "reactstrap";
import { useAppDispatch } from "../../../../../ReduxToolkit/Hooks";
import { SearchHere } from "../../../../../Constants";
import { searchMember } from "../../../../../ReduxToolkit/Reducers/ChatSlice";
import { ChatOption } from "./ChatOption";

const Sidebar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useAppDispatch();
  const handleSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
    dispatch(searchMember(keyword));
  };

  return (
    <Col xxl="3" xl="4" md="5" className="box-col-5">
      <Card className="left-sidebar-wrapper">
        <div className="left-sidebar-chat">
          <InputGroup>
            <InputGroupText>
              <Search className="search-icon text-gray" />
            </InputGroupText>
            <Input type="text" placeholder={SearchHere}  defaultValue={searchKeyword} onChange={(e) => handleSearchKeyword(e.target.value)} />
          </InputGroup>
        </div>
        <ChatOption />
      </Card>
    </Col>
  );
};
export default Sidebar