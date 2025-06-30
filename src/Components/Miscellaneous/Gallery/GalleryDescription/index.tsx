import { Fragment, MutableRefObject } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { GalleryDescriptionTitle, GalleryTitle, Href, ImageGalleryDescriptionTitle, PortfolioTitle } from "../../../../Constants";
import { dynamicImage } from "../../../../Utils";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const GalleryDescriptionContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={GalleryDescriptionTitle} parent={GalleryTitle} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={ImageGalleryDescriptionTitle} />
              <CardBody className="my-gallery gallery-with-description">
                <Row>
                  <Gallery withCaption>
                    {[...Array(4)].map((_) =>
                      [...Array(4)].map((_, index) => ( 
                        <Col xl="3" sm="6" key={index}>
                          <figure itemProp="caption description">
                            <Item original={dynamicImage(`lightgallry/0${index + 1}.jpg`)} caption="Here is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy." width="802" height="476">
                              {({ ref, open }) => (
                                <Link to={Href} onClick={open}> 
                                  <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref as unknown as MutableRefObject<HTMLImageElement>} src={dynamicImage(`lightgallry/0${index + 1}.jpg`)} alt="Image_description" />
                                  <div className="caption border-top-0 p-2">
                                    <h4>{PortfolioTitle}</h4>
                                    <p>{"Here is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                  </div>
                                </Link>
                              )}
                            </Item>
                          </figure>
                        </Col>
                      ))
                    )}
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

export default GalleryDescriptionContainer;
