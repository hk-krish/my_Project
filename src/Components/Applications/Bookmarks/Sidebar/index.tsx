import { Button, Card, CardBody, Col, Media } from "reactstrap";
import { BookmarkFilter } from "../../../../Constants";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setBookmarkFilter } from "../../../../ReduxToolkit/Reducers/BookmarkTabSlice";
import { dynamicImage, Image } from "../../../../Utils";
import TabList from "./TabList";

const SideBar = () => {
  const { bookmarkFilter } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();

  return (
    <Col xl="3" className="box-col-6">
      <div className="md-sidebar">
        <Button tag="a" color="primary" className="md-sidebar-toggle" onClick={() => dispatch(setBookmarkFilter())}>{BookmarkFilter}</Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${bookmarkFilter ? "open" : ""}`}>
          <div className="mail-left-bar">
            <Card>
              <CardBody>
                <div className="message-sidebar left-bookmark">
                  <Media className="d-flex">
                    <div className="media-size-email">
                      <Image className="me-3 rounded-circle" src={dynamicImage(`user/user.png`)} alt="user" />
                    </div>
                    <Media body className="flex-grow-1">
                      <h4>MARK JECNO</h4>
                      <p>Markjecno@gmail.com</p>
                    </Media>
                  </Media>
                  <TabList />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SideBar;