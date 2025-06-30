import { Fragment, MutableRefObject } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { GalleryTitle, Href, ImageGalleryTitle } from "../../../../Constants";
import { dynamicImage } from "../../../../Utils";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const GalleryGridContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={GalleryTitle} parent={GalleryTitle} />
      <Container fluid>
        <Row className="mb-4">
          <Col sm="12">
            <Card> 
              <CommonCardHeader title={ImageGalleryTitle} />
              <CardBody className="gallery my-gallery">
                <Row>
                  <Gallery> 
                    {[...Array(12)].map((_, index) => (
                      <Col xl="3" md="4" xs="6" key={index}>
                        <figure> 
                          <Item original={dynamicImage(`lightgallry/0${index + 1}.jpg`)} width="1300" height="800">
                            {({ ref, open }) => (
                              <Link to={Href} onClick={open}>
                                <img className="img-thumbnail" ref={ref as unknown as MutableRefObject<HTMLImageElement>} src={dynamicImage(`lightgallry/0${index + 1}.jpg`)} alt="Image_description" />
                              </Link>
                            )}
                          </Item>
                        </figure>
                      </Col>
                    ))}
                  </Gallery>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default GalleryGridContainer;
