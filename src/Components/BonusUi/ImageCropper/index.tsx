import { Fragment } from "react/jsx-runtime";
import { Card, Col, Container, Row } from "reactstrap";
import { ImageCropperTitle, UIKits } from "../../../Constants";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import ImageCropperBody from "./ImageCropperBody";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const ImageCropperContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ImageCropperTitle} parent={UIKits} />
      <Container fluid>
        <div className="img-cropper">
          <Row>
            <Col sm="12">
              <Card>
                <CommonCardHeader title={ImageCropperTitle} />
                <ImageCropperBody />
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default ImageCropperContainer;
