import Masonry from "react-masonry-css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { GalleryTitle, Href, MasonryGalleryTitle } from "../../../../Constants";
import { dynamicImage } from "../../../../Utils";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import Breadcrumbs from "../../../CoreComponents/Breadcrumbs";

const MasonryGalleryContainer = () => {
  const BreakpointColumnsObj = {default: 4,1199: 3,700: 2,500: 1};
  return (
    <Fragment>
      <Breadcrumbs mainTitle={MasonryGalleryTitle} parent={GalleryTitle} />
      <Container fluid>
        <Row>
          <Col sm="12" className="box-col-12">
            <Card>
              <CommonCardHeader title={MasonryGalleryTitle} />
              <CardBody className="photoswipe-pb-responsive">
                <Gallery>
                  <Masonry breakpointCols={BreakpointColumnsObj} className="my-gallery row grid gallery mb-0" columnClassName="col-md-3 col-sm-6 grid-item">
                    {[...Array(15)].map((_, index) => (
                      <figure key={index} className="m-0">
                        <Item original={dynamicImage(`masonry/${index + 1}.jpg`)} width="700" height="850">
                          {({ ref, open }) => (
                            <Link to={Href} onClick={open}>
                              <img className="img-thumbnail mb-4" ref={ref as unknown as React.MutableRefObject<HTMLImageElement>} src={dynamicImage(`masonry/${index + 1}.jpg`)} alt="Image_description" />
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

export default MasonryGalleryContainer;
