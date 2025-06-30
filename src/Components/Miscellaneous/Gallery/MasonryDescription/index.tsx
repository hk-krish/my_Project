import React, { Fragment } from "react";
import Masonry from "react-masonry-css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { GalleryTitle, MasonryDescriptionTitle } from "../../../../Constants";
import { dynamicImage,  } from "../../../../Utils";
import { Href, PortfolioTitle } from "../../../../Constants";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const MasonryDescriptionContainer = () => {
  const BreakpointColumnsObj = {default: 4,1199: 3,700: 2,500: 1};
  return (
    <Fragment>
      <Breadcrumbs mainTitle={MasonryDescriptionTitle} parent={GalleryTitle} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={MasonryDescriptionTitle} />
              <CardBody>
                <Gallery withCaption>
                  <Masonry breakpointCols={BreakpointColumnsObj} className="my-gallery row grid gallery-with-description mb-0" columnClassName="col-xl-3 col-sm-6 grid-item">
                    {[...Array(15)].map((_, index) => (
                      <figure key={index}>
                        <Item original={dynamicImage(`masonry/${index + 1}.jpg`)} width="700" height="850" caption="Here is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.">
                          {({ ref, open }) => (
                            <Link to={Href} onClick={open}>
                              <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref as unknown as React.MutableRefObject<HTMLImageElement>} src={dynamicImage(`masonry/${index + 1}.jpg`)} alt="Image_description" />
                              <div className="caption border-top-0 p-2">
                                <h4>{PortfolioTitle}</h4>
                                <p>{"Here is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                              </div>
                            </Link>
                          )}
                        </Item>
                      </figure>
                    ))}
                  </Masonry>
                </Gallery>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default MasonryDescriptionContainer;
