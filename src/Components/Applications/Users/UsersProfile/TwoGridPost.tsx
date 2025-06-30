import { MutableRefObject } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, Col, Row } from "reactstrap";
import { Href } from "../../../../Constants";
import { dynamicImage } from "../../../../Utils";
import CommonUserFooter from "./Common/CommonUserFooter";
import CommonUserHeader from "./Common/CommonUserHeader";

const TwoGridPost = () => {
  const ProfileData: string = "Engage your senses: Explore nature with all your senses. Listen to the sounds of birds chirping or leaves rustling in the wind. Feel the texture of tree bark or the sensation of cool water on your skin. Observe the colors, shapes, and patterns in the environment.Participate in outdoor activities: Take part in activities that allow you to interact with nature actively.";

  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <CommonUserHeader />
          <hr />
          <p>{ProfileData}</p>
          <Row className="mb-4 pictures my-gallery">
            <Gallery withCaption>
              <Row className="mt-4 pictures my-gallery">
                {[...Array(2)].map((_, index) => (
                  <figure className="col-sm-6 m-0" key={index}>
                    <Item original={dynamicImage(`other-images/profile-style-img3.png`)} width="1600" height="800" caption="Image Caption 1">
                      {({ ref, open }) => (
                        <a href={Href} onClick={open}>
                          <img className="img-fluid rounded" ref={ref as unknown as MutableRefObject<HTMLImageElement>} src={dynamicImage(`other-images/profile-style-img.png`)} alt="_image" />
                        </a>
                      )}
                    </Item>
                  </figure>
                ))}
              </Row>
            </Gallery>
          </Row>
          <CommonUserFooter />
        </div>
      </Card>
    </Col>
  );
};

export default TwoGridPost;
