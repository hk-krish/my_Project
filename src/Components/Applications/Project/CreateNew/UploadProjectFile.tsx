import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Label, Row } from "reactstrap";
import { Add, Cancel, UploadProjectFiles } from "../../../../Constants";
import { routes } from "../../../../Routers/routes";
import CommonFileUpload from "../../../CoreComponents/CommonFileUpload";

const UploadProjectFile = () => {
  return (
    <Fragment>
      <Row>
        <Col className="custom-dropzone-project">
          <div className="mb-3">
            <Label>{UploadProjectFiles}</Label>
            <CommonFileUpload />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="text-end">
            <Button type="submit" color="success" className="me-3">
              {Add}
            </Button>
            <Link className="btn btn-danger" to={routes.Project.List}>
              {Cancel}
            </Link>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UploadProjectFile;
