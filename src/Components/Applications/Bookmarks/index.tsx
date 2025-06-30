import { Card, Col, Container, Row } from "reactstrap";
import { Apps, Bookmarks } from "../../../Constants";
import Sidebar from "./Sidebar";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import Tabs from "./Tabs";

const BookmarkContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Bookmarks} parent={Apps} />
      <Container fluid>
        <div className="message-wrap bookmark-wrap">
          <Row>
            <Sidebar />
            <Col xl="9" md="12" className="box-col-12">
              <div className="mail-right-bar bookmark-tabcontent">
                <Card className="message-body radius-left">
                  <div className="ps-0">
                    <Tabs />
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default BookmarkContainer;
