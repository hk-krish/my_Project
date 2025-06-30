import { useEffect } from "react";
import { Card, Col, Row } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setBookMarkList, setBookmark } from "../../../../../ReduxToolkit/Reducers/BookmarkTabSlice";
import { BookMarkData } from "../../../../../Types/Applications";
import { dynamicImage, Image } from "../../../../../Utils";
import { Href } from "../../../../../Constants";
import SearchNotFoundClass from "../../../../CoreComponents/SearchNotFoundClass";
import { Link } from "react-router-dom";
import DescriptionData from "./DescriptionData";

const DataList = () => {
  const { bookmark, bookMarkList } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const updatedList = bookmark.filter((data) => data.fillStar === true);
    dispatch(setBookMarkList(updatedList));
  }, [bookmark, dispatch]);

  const removeFromFavorite = (item: BookMarkData) => {
    const updatedBookMark = bookmark.map((data) => (data.id === item.id ? { ...data, fillStar: false } : data));
    dispatch(setBookmark(updatedBookMark));
  };

  return (
    <Row>
      {bookMarkList.length > 0 ? (
        bookMarkList.map((myBookData: BookMarkData) => (
          <Col xxl="3" md="4" className="col-ed-4" key={myBookData.id}>
            <Card className="card-with-border bookmark-card o-hidden">
              <div className="details-website">
                <Image className="img-fluid" src={dynamicImage(`${myBookData.image}`)} alt="Image" />
                <div className={`favourite-icon favourite_0 ${myBookData.fillStar ? "favourite" : ""}`}>
                  <Link to={Href}>
                    <i className="fa fa-star" onClick={() => removeFromFavorite(myBookData)}></i>
                  </Link>
                </div>
                <DescriptionData myBookData={myBookData} />
              </div>
            </Card>
          </Col>
        ))
      ) : (
        <SearchNotFoundClass word="Bookmark"/>
      )}
    </Row>
  );
};
export default DataList;
