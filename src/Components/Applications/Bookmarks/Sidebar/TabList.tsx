import { Bookmark, PlusCircle } from "react-feather";
import { Button, Nav, NavItem } from "reactstrap";
import { Href, NewBookmark, Tags, Views } from "../../../../Constants";
import { bookmarkTagList, bookmarkViewList } from "../../../../Data/Applications/Bookmark";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setAddModal, setTagModal, updateActiveTabs } from "../../../../ReduxToolkit/Reducers/BookmarkTabSlice";
import { Link } from "react-router-dom";
import ModalTag from "../Modal/Tag";
import CreateBookmark from "../Modal/CreateBookmark";

const TabList = () => {
  const { activeTabs, bookMarkList } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const onHandleClick = (id: string) => dispatch(updateActiveTabs(id));

  return (
    <Nav className="main-menu" role="tablist">
      <NavItem>
        <Button color="transparent" className="badge-light-primary btn-block w-100 btn-mail" onClick={() => dispatch(setAddModal())}>
          <Bookmark className="me-2" />{NewBookmark}<CreateBookmark />
        </Button>
      </NavItem>
      <NavItem><span className="main-title">{Views}</span></NavItem>
      {bookmarkViewList.map((data, index) => (
        <NavItem key={index}>
          <Link className={`${activeTabs === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} to={Href}>
            <span className="title">{data.title} {data.title === "Favorites" && `(${bookMarkList.length})`}</span>
          </Link>
        </NavItem>
      ))}
      <NavItem><hr /></NavItem>
      <NavItem>
        <span className="main-title">
          {Tags}
          <span className="pull-right" onClick={() => dispatch(setTagModal())}>
            <Link to={Href}><PlusCircle /></Link>
          </span>
        </span>
      </NavItem>
      <ModalTag />
      {bookmarkTagList.map((data, index) => (
        <NavItem key={index}>
          <Link className={`${activeTabs === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} to={Href}>
            <span className="title"> {data.title}</span>
          </Link>
        </NavItem>
      ))}
    </Nav>
  );
};

export default TabList;