import { Fragment, MutableRefObject } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Href, ImageAbout, PortfolioTitle } from "../../../../Constants";
import { dynamicImage } from "../../../../Utils";
import PagesSort from "./Pages";

const PhotosTab = () => {
  return (
    <Fragment>
      <h5 className="f-w-700 mb-2">{ImageAbout}</h5>
      <Row className="my-gallery gallery-with-description">
        <Row>
          <Gallery withCaption>
            {[...Array(8)].map((_,index) => (
              <Col xl="3" sm="6" key={index}>
                <figure itemProp="caption description m-0">
                  <Item original={dynamicImage(`lightgallry/0${index + 1}.jpg`)} caption="Using a camera's lens to record moments in time is the art form known as photography. To produce aesthetically striking photos, it entails the deft use of light, composition, and subject matter." width="802" height="476">
                    {({ ref, open }) => (
                      <Link to={Href} onClick={open}>
                        <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref as unknown as MutableRefObject<HTMLImageElement>} src={dynamicImage(`lightgallry/0${index + 1}.jpg`)} alt="Image_description" />
                        <div className="caption border-top-0 p-2">
                          <h5>{PortfolioTitle}</h5>
                          <p>{"Using a camera's lens to record moments in time is the art form known as photography. To produce aesthetically striking photos, it entails the deft use of light, composition, and subject matter."}</p>
                        </div>
                      </Link>
                    )}
                  </Item>
                </figure>
              </Col>
            ))}
          </Gallery>
        </Row>
      </Row>
      <PagesSort pageClass="start" />
    </Fragment>
  );
};

export default PhotosTab;
