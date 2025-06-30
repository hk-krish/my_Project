import { Fragment } from "react/jsx-runtime";
import { Col, Container, Row } from "reactstrap";
import { Apps, FileManager } from "../../../Constants";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import FileContent from "./FileContent/FileContent";
import FileSideBar from "./FileSideBar/FileSideBar";

const FileManagerContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={FileManager} parent={Apps} />
      <Container fluid>
        <Row>
          <FileSideBar />
          <Col xl="9" md="12" className="box-col-12">
            <div className="file-content">
              <FileContent />
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default FileManagerContainer;
