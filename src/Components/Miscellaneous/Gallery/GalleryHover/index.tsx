import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { GalleryTitle, HoverEffect, ImageHoverEffectsTitle } from "../../../../Constants";
import { dynamicImage, Image } from "../../../../Utils";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const GalleryHoverContainer = () => {
  const hoverImageData = [8, 9, 10, 11];
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ImageHoverEffectsTitle} parent={GalleryTitle} />
      <Container fluid>
        {[...Array(15)].map((_, index) => (
          <Row key={index}>
            <Col sm="12">
              <Card>
                <CommonCardHeader title={`${HoverEffect} ${index + 1}`} />
                <CardBody>
                  <Row id="aniimated-thumbnials" className="my-gallery gallery">
                    {hoverImageData.map((image, index) => (
                      <Col xs="6" md="3" key={index}>
                        <figure itemProp="associatedMedia" className={`img-hover hover-${index + 1}`}>
                          <div>
                            <Image className="img-fluid" src={dynamicImage(`lightgallry/0${image}.jpg`)} alt="Image description" />
                          </div>
                        </figure>
                      </Col>
                    ))}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </Fragment>
  );
};

export default GalleryHoverContainer;
