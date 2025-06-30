import { MutableRefObject } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, Col, Row } from "reactstrap";
import { Href } from "../../../../Constants";
import { dynamicImage } from "../../../../Utils";
import CommonUserFooter from "./Common/CommonUserFooter";
import CommonUserHeader from "./Common/CommonUserHeader";

const ListViewPost = () => {
  const ProfileData: string = "Dressing is a way of life. My customers are successful working women. I want people to be afraid of the women I dress. Age is something only in your head or a stereotype. Age means nothing when you are passionate about something. There has to be a balance between your mental satisfaction and the financial needs of your company.Success isn't about the end result, it's about what you learn along the way. Confidence. If you have it, you can make anything look good. Grunge is a hippied romantic version of punk. I'm an accomplice to helping women get what they want. Clothes can transform your mood and confidence. I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable.";

  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <CommonUserHeader />
          <hr />
          <Row>
            <Col lg="12" xl="4">
              <div className="my-gallery">
                <Gallery withCaption>
                  <figure className="m-0">
                    <Item original={dynamicImage(`blog/img.png`)} width="1600" height="800" caption="Image Caption 1">
                      {({ ref, open }) => (
                        <a href={Href} onClick={open}>
                          <img className="img-fluid rounded" ref={ref as unknown as MutableRefObject<HTMLImageElement>} src={dynamicImage(`blog/img.png`)} alt="_image" />
                        </a>
                      )}
                    </Item>
                  </figure>
                </Gallery>
              </div>
              <CommonUserFooter listClass="mt-4 like-comment-sm-mb" />
            </Col>
            <Col xl="6">
              <p>{ProfileData}</p>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default ListViewPost;
