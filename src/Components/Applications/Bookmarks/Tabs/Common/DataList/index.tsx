import { Link } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import SweetAlert from "sweetalert2";
import { Href } from "../../../../../../Constants";
import { useAppDispatch, useAppSelector } from "../../../../../../ReduxToolkit/Hooks";
import { setBookmark, setEditModal, setEditRow, setRemoveBookmark } from "../../../../../../ReduxToolkit/Reducers/BookmarkTabSlice";
import { BookMarkData } from "../../../../../../Types/Applications";
import { dynamicImage, Image } from "../../../../../../Utils";
import DescriptionData from "./DescriptionData";
import SearchNotFoundClass from "../../../../../CoreComponents/SearchNotFoundClass";

const DataList = () => {
  const { bookmark } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const addToFavorites = (data: BookMarkData) => {
    if (data.fillStar === false) {
      const newBookMarkData = bookmark.map((item) => (item.id === data.id ? { ...item, fillStar: true } : item));
      dispatch(setBookmark(newBookMarkData));
    } else {
      const newBookMarkData = bookmark.map((item) => (item.id === data.id ? { ...item, fillStar: false } : item));
      dispatch(setBookmark(newBookMarkData));
    }
  };

  const onHandleClick = (data: BookMarkData) => {
    dispatch(setEditModal());
    dispatch(setEditRow(data));
  };

  const removeFromBookmark = (bookmarkId: number) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(setRemoveBookmark(bookmarkId));
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };

  return (
    <Row id="bookmarkData">
      {bookmark.length > 0 ? (
        bookmark.map((data, index) => (
          <Col xxl="3" md="4" key={index} className="col-ed-4">
            <Card className="card-with-border bookmark-card o-hidden">
              <div className="details-website">
                <Image className="img-fluid" src={dynamicImage(`${data.image}`)} alt="image" />
                <div className={`favourite-icon favourite_0 ${data.fillStar ? "favourite" : ""}`} onClick={() => addToFavorites(data)}>
                  <Link to={Href}><i className="fa fa-star"/></Link>
                </div>
                <DescriptionData data={data} onHandleClick={onHandleClick} removeFromBookmark={removeFromBookmark} />
              </div>
            </Card>
          </Col>
        ))
      ) : (
        <SearchNotFoundClass word="Bookmark" />
      )}
    </Row>
  );
};

export default DataList;
